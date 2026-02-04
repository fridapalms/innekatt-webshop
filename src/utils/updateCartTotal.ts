import { cart } from "./saveCart";

export function updateCartTotal() {
  const total = cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  const cartTotal = document.getElementById("cartTotal");
  const shopTotal = document.getElementById("shopTotal");
  if (cartTotal) {
    cartTotal.textContent = total.toString();
  }

  if (shopTotal) {
    shopTotal.textContent = total.toString();
  }
}
