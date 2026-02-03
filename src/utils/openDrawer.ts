import { updatePurchaseBtn } from "./updatePurchaseBtn";

// öppnar varukorgen
export function openDrawer() {
  const overlay = document.getElementById("cartOverlay");
  overlay?.classList.add("open");
}
