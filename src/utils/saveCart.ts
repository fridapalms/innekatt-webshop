import type { cartItem } from "../models/cartItem";
import { Product } from "../models/Product";
import { openDrawer } from "./openDrawer";
import { renderCart } from "./renderCart";
import { updatePurchaseBtn } from "./updatePurchaseBtn";

//LocalStorage-nyckel där varukorgen sparas
export const CART_KEY = "cart";

//Varukorgen
export const cart: cartItem[] = [];

//Sparar varukorg i localStorage
export const saveToLocalStorage = () => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

//Hämtar varukorg från localStorage
export const getLocalStorage = () => {
  const storedCart = localStorage.getItem(CART_KEY);

  if (!storedCart) return; //Finns det inget i korgen, avbryt

  try {
    const storedCartItems = JSON.parse(storedCart) as Array<cartItem>;

    cart.length = 0;

    storedCartItems.forEach((item) => {
      const product = new Product(item.product.brand, item.product.name, item.product.price, item.product.image, item.product.info, item.product.id, item.product.bg, item.product.activity);

      cart.push({ product, quantity: item.quantity });
    });
  } catch {
    localStorage.removeItem(CART_KEY);
  }
};

//Lägga till i varukorgen
export const addToCart = (product: Product) => {
  const existing = cart.find((item) => item.product.id === product.id); //Kolla om produkten redan finns

  if (existing) {
    existing.quantity += 1; //Om den finns, öka antal
  } else {
    cart.push({ product: product, quantity: 1 }); //Annars lägg till produkten med kvantitet 1
  }
  saveToLocalStorage();
  renderCart("loadCartItems");
  renderCart("cart-products");
  openDrawer();
  updatePurchaseBtn();
};
