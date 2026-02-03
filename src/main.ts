import { createHtml } from "./utils/createHtml";
import "./scss/style.scss";
import { allproducts } from "./data/productData";
import { initCartDrawer } from "./features/cartDrawer";
import { addToCart, getLocalStorage } from "./utils/saveCart";
import { renderCart } from "./utils/renderCart";
import { clearCart } from "./utils/updateQuantity";
import { showProductByActivity } from "./utils/activityProducts";
import { updatePurchaseBtn } from "./utils/updatePurchaseBtn";

//Loopa genom listan allproducts, skapar HTML för varje produkt
const productsdiv = document.getElementById("js-products");
if (productsdiv) {
  allproducts.forEach((product) => {
    createHtml(product, productsdiv);
  });
}

//När sidan laddat, kör dessa funktioner
document.addEventListener("DOMContentLoaded", () => {
  initCartDrawer();
  getLocalStorage();
  renderCart("loadCartItems");
  renderCart("cart-products");
});

//Klick på köpknappen
document.addEventListener("click", (e) => {
  //Lyssna på hela sidan
  const target = e.target as HTMLElement; //Tolka det vi klickar på som ett html-element

  if (!target.classList.contains("buyBtn")) return; //Kolla om elementet har klassen buyBtn

  const productId = target.dataset.id; //Hämta produktens id från knappens data-id
  if (!productId) return;

  const product = allproducts.find((p) => p.id === productId); //Jämför listan med produkt-id
  if (!product) return;

  addToCart(product); //Lägg till i varukorgen
});

//Töm varukorgen
const emptyCartBtn = document.getElementById("emptyCartBtn");
emptyCartBtn?.addEventListener("click", () => {
  clearCart();
});

//Klick på aktivitetsknapp genererar filtrerad lista
const activityBtns = document.querySelectorAll<HTMLButtonElement>(".activitybtn");
activityBtns.forEach((button) => {
  //Loopar igenom varje knapp
  button.addEventListener("click", () => {
    //Lyssnar efter klick
    showProductByActivity(button.id); //Visar listan med rätt id
  });
});

//Simulera köp
const purchaseForm = document.getElementById("checkoutForm") as HTMLFormElement; //Hitta formuläret

purchaseForm.addEventListener("submit", (e) => {
  //Lyssna efter submit
  e.preventDefault(); //Avbryter vanliga beteendet

  //Tömmer varukorgen
  clearCart();

  //Går till bekräftelsesidan
  window.location.href = "confirmation.html";
});
updatePurchaseBtn();
