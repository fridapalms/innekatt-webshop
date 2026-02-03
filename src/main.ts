import { createHtml } from "./utils/createHtml";
import "./scss/style.scss";
import { allproducts } from "./data/productData";
import { initCartDrawer } from "./features/cartDrawer";
import { addToCart, getLocalStorage } from "./utils/saveCart";
import { renderCart } from "./utils/renderCart";
import { clearCart } from "./utils/updateQuantity";
import { showProductByActivity } from "./utils/activityProducts";

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
  renderCart();
});

//Klick på köpknappen
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (!target.classList.contains("buyBtn")) return;

  const productId = target.dataset.id;
  if (!productId) return;

  const product = allproducts.find((p) => p.id === productId);
  if (!product) return;

  addToCart(product);
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
