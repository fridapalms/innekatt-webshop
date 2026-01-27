import type { cartItem } from "../models/cartItem";
import { Product } from "../models/Product";
import { openDrawer } from "./openDrawer";
import { renderCart } from "./renderCart";

export const CART_KEY = "cart";

export const cart: cartItem[] = [];

export const saveToLocalStorage = () => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const getLocalStorage = () => {
  const storedCart = localStorage.getItem(CART_KEY);

  if (!storedCart) return;

  try {
    const storedCartItems = JSON.parse(storedCart) as Array<cartItem>;

    cart.length = 0;

    storedCartItems.forEach((item) => {
      const product = new Product(item.product.brand, item.product.name, item.product.price, item.product.image, item.product.info, item.product.id, item.product.bg);

      cart.push({ product, quantity: item.quantity });
    });
  } catch {
    localStorage.removeItem(CART_KEY);
  }
};

export const addToCart = (product: Product) => {
  const existing = cart.find((item) => item.product.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product: product, quantity: 1 });
  }
  saveToLocalStorage();
  renderCart();
  openDrawer();
};
