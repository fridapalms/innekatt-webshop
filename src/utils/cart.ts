import type { cartItem } from "../models/cartItem";
import { Product } from "../models/Product";

// öppnar varukorgen
export function openDrawer() {
  const overlay = document.getElementById("cartOverlay");
  overlay?.classList.add("open");
}
