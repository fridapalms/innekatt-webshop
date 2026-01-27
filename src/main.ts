import { createHtml } from "./utils/createHtml";
import "./scss/style.scss";
import { allproducts } from "./data/productData";
import { initCartDrawer } from "./features/cartDrawer";
import { addToCart, getLocalStorage } from "./utils/saveCart";
import { renderCart } from "./utils/renderCart";
import { clearCart } from "./utils/updateQuantity";

//Loopa genom listan allproducts, skapar HTML för varje produkt
allproducts.forEach((product) => {
  const productsdiv = document.getElementById("js-products");

  if (productsdiv) {
    createHtml(product);
  }
});

//När sidan laddat, kör dessa funktioner
document.addEventListener("DOMContentLoaded", () => {
  initCartDrawer();
  getLocalStorage();
  renderCart();
});

//Klick på köpknappen
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (!target.classList.contains("buybtn")) return;

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
