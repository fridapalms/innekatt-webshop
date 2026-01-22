import { Product } from "../models/Product";
import { openModal } from "./openModal";

//Funktion createHtml
export const createHtml = (product: Product) => {
  const productsdiv = document.getElementById("js-products");

  //Skapa element
  const card = document.createElement("div");
  const cardimg = document.createElement("div");
  const productimg = document.createElement("img");
  const infodiv = document.createElement("div");
  const brand = document.createElement("p");
  const name = document.createElement("p");
  const price = document.createElement("p");
  const btndiv = document.createElement("div");
  const infobtn = document.createElement("button");
  const buybtn = document.createElement("button");

  //Ändra element
  card.className = "card";
  cardimg.className = "cardimg";
  cardimg.style.backgroundColor = product.bg;
  productimg.className = "productimg";
  productimg.src = product.image;
  infodiv.className = "infodiv";
  brand.className = "brand";
  brand.innerHTML = product.brand;
  name.className = "name";
  name.innerHTML = product.name;
  price.className = "price";
  price.innerHTML = product.price;
  btndiv.className = "btndiv";
  infobtn.className = "infobtn";
  infobtn.id = "infobtn";
  infobtn.innerHTML = "Produktinformation";
  buybtn.className = "buybtn";
  buybtn.innerHTML = "Köp";

  //Lyssnar efter klick på infoknappen
  infobtn.addEventListener("click", () => {
    openModal(product);
  });

  //Placera element
  cardimg.appendChild(productimg);
  infodiv.appendChild(brand);
  infodiv.appendChild(name);
  infodiv.appendChild(price);
  btndiv.appendChild(infobtn);
  btndiv.appendChild(buybtn);
  card.appendChild(cardimg);
  card.appendChild(infodiv);
  card.appendChild(btndiv);
  productsdiv?.appendChild(card);
};
