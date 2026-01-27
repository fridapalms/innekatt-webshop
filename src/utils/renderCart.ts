import { cart, getLocalStorage } from "./saveCart";
import { minusQuantity, plusQuantity } from "./updateQuantity";

export const renderCart = () => {
  const loadCartItems = document.getElementById("loadCartItems");

  if (!loadCartItems) return;

  //hämta listan från localStorage
  getLocalStorage();

  //töm containern
  loadCartItems.innerHTML = "";

  //om listan är tom, visa placeholder-texten
  if (cart.length === 0) {
    loadCartItems.innerHTML = `<p class="cartText" id="cartText">Här ekar det tomt!</p>`;
    return;
  }

  //uppdatera antal i varukorgen i nav
  const cartTotalQuantity = document.getElementById("cartTotalQuantity");

  if (cartTotalQuantity) {
    cartTotalQuantity.innerHTML = cart.length.toString();
  }

  //skapa html för varje produkt i varukorgen
  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cartItemDiv";

    if (cartItemDiv) {
      cartItemDiv.innerHTML = "";

      //skapa
      const cartItemImgDiv = document.createElement("div");
      const cartItemImg = document.createElement("img");
      const cartItemInfoDiv = document.createElement("div");
      const productDetails = document.createElement("div");
      const brand = document.createElement("p");
      const name = document.createElement("p");
      const price = document.createElement("p");
      const quantityBtns = document.createElement("div");
      const minusBtn = document.createElement("button");
      const quantityNumber = document.createElement("div");
      const plusBtn = document.createElement("button");

      //ändra
      cartItemImgDiv.className = "cartItemImgDiv";
      cartItemImgDiv.style.backgroundColor = item.product.bg;
      cartItemImg.className = "cartItemImg";
      cartItemImg.src = item.product.image;
      cartItemInfoDiv.className = "cartItemInfoDiv";
      productDetails.className = "productDetails";
      brand.className = "brand";
      brand.textContent = item.product.brand;
      name.className = "name";
      name.textContent = item.product.name;
      price.className = "price";
      price.textContent = item.product.price;
      quantityBtns.className = "quantityBtns";
      minusBtn.className = "quantityBtn";
      minusBtn.textContent = "-";
      quantityNumber.className = "quantityNumber";
      quantityNumber.textContent = item.quantity.toString();
      plusBtn.className = "quantityBtn";
      plusBtn.textContent = "+";

      minusBtn.addEventListener("click", () => {
        minusQuantity(index);
      });

      plusBtn.addEventListener("click", () => {
        plusQuantity(index);
      });

      //visa
      cartItemImgDiv.appendChild(cartItemImg);
      productDetails.appendChild(brand);
      productDetails.appendChild(name);
      productDetails.appendChild(price);
      quantityBtns.appendChild(minusBtn);
      quantityBtns.appendChild(quantityNumber);
      quantityBtns.appendChild(plusBtn);
      cartItemInfoDiv.appendChild(productDetails);
      cartItemInfoDiv.appendChild(quantityBtns);
      cartItemDiv.appendChild(cartItemImgDiv);
      cartItemDiv.appendChild(cartItemInfoDiv);
      loadCartItems.appendChild(cartItemDiv);
    }
  });
};
