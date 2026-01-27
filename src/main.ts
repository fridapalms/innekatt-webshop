import { createHtml } from "./utils/createHtml";
import "./scss/style.scss";
import { allproducts } from "./data/productData";
import { initCartDrawer } from "./features/cartDrawer";
import { addingToCart } from "./features/addingToCart";
import { getLocalStorage } from "./utils/saveCart";
import { renderCart } from "./utils/renderCart";

//Loopa genom listan allproducts, skapar HTML för varje produkt
allproducts.forEach((product) => {
  const productsdiv = document.getElementById("js-products");

  if (productsdiv) {
    createHtml(product);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  initCartDrawer();
  getLocalStorage();
  renderCart();
  addingToCart();
});
