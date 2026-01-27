import { allproducts } from "../data/productData";
import { addToCart, saveToLocalStorage } from "../utils/saveCart";

export const getProductById = (id: string) => {
  return allproducts.find((p) => p.id === id);
};

export const addingToCart = () => {
  const buyBtn = document.querySelectorAll<HTMLButtonElement>(".buybtn");

  buyBtn.forEach((buyBtn) => {
    buyBtn?.addEventListener("click", (e) => {
      e.preventDefault();

      const productId = buyBtn.dataset.id;
      if (!productId) return;

      const product = getProductById(productId);
      if (!product) return;

      addToCart(product);
    });
  });
};
