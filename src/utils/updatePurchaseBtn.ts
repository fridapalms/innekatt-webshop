import { cart, getLocalStorage } from "./saveCart";

const purchaseBtn = document.getElementById("purchaseBtn") as HTMLButtonElement;

export const updatePurchaseBtn = () => {
  getLocalStorage();

  if (!purchaseBtn) return;

  purchaseBtn.disabled = cart.length === 0;
};
