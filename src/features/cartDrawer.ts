import { openDrawer } from "../utils/cart";

//Öppna och stänga varukorgen
export const initCartDrawer = () => {
  const cartBtn = document.getElementById("cartBtn");
  const overlay = document.getElementById("cartOverlay");
  const closeBtn = document.getElementById("closeBtn");

  if (cartBtn && overlay && closeBtn) {
    cartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openDrawer();
    });

    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("open");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        overlay.classList.remove("open");
      }
    });
  }
};
