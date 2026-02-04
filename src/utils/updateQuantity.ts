import { renderCart } from "./renderCart";
import { cart, getLocalStorage, saveToLocalStorage } from "./saveCart";
import { updateCartTotal } from "./updateCartTotal";
import { updatePurchaseBtn } from "./updatePurchaseBtn";

//ÖKA KVANTITETEN I VARUKORGEN
export const plusQuantity = (index: number): void => {
  getLocalStorage();

  //om index är negativt, avbryt
  if (index < 0) return;

  //om index är längre än listan, avbryt
  if (index >= cart.length) return;

  //öka kvantiteten på varan på det index som klickades på
  cart[index].quantity = cart[index].quantity + 1;

  //spara i localStorage, uppdatera varukorgens UI och lägg till produkten i varukorgen
  saveToLocalStorage();
  renderCart("loadCartItems");
  renderCart("cart-products");
  updatePurchaseBtn();
  updateCartTotal();
};

//MINSKA KVANTITETEN I VARUKORGEN
export const minusQuantity = (index: number): void => {
  getLocalStorage();

  //om index är negativt, avbryt
  if (index < 0) return;

  //om index är längre än listan, avbryt
  if (index >= cart.length) return;

  //minska kvantiteten på varan på det index som klickades på
  cart[index].quantity = cart[index].quantity - 1;

  //om kvantiteten är 0 eller mindre, ta bort varan ur varukorgen
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  //spara i localStorage, uppdatera varukorgens UI och lägg till produkten i varukorgen
  saveToLocalStorage();
  renderCart("loadCartItems");
  renderCart("cart-products");
  updatePurchaseBtn();
  updateCartTotal();
};

//TÖM VARUKORGEN
export function clearCart() {
  cart.length = 0;
  saveToLocalStorage();
  renderCart("loadCartItems");
  renderCart("cart-products");
  updatePurchaseBtn();
  updateCartTotal();
}
