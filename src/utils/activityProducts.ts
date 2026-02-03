import { allproducts } from "../data/productData";
import { createHtml } from "./createHtml";

//Variabel för den aktivitet som just nu visas, eller null om ingen är öppen
let activeActivity: string | null = null;

export const showProductByActivity = (activity: string) => {
  const activityProducts = document.getElementById("activity-products");
  if (!activityProducts) return;

  //Om aktiviteten man klickade på matchar den aktiva aktiviteten
  if (activeActivity === activity) {
    activityProducts.innerHTML = ""; //Listan töms
    activeActivity = null; //Ingen aktivitet är aktiv längre
    return;
  }

  //Om man klickar på en aktivitet är den aktiv
  activeActivity = activity;
  activityProducts.innerHTML = ""; //Rensa listan innan
  const filteredProducts = allproducts.filter((product) => product.activity === activity); //Ny lista med bara rätt aktivitet

  filteredProducts.forEach((product) => {
    createHtml(product, activityProducts); //Loopa fram html för listan
  });
};
