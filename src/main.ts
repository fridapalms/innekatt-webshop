import { createHtml } from "./utils/createHtml";
import "./scss/style.scss";
import { allproducts } from "./data/productData";

//Loopa genom listan allproducts, skapar HTML för varje produkt
allproducts.forEach((product) => {
  const productsdiv = document.getElementById("js-products");

  if (productsdiv) {
    createHtml(product);
  }
});
