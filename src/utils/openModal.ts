import type { Product } from "../models/Product";

//Klick på infoknappen kör funktionen openModal
export const openModal = (product: Product) => {
  const modal = document.getElementById("modal") as HTMLDialogElement;
  if (!modal) return;

  //Töm modal på gammalt innehåll
  modal.innerHTML = "";

  //Skapa element
  const modalDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const productImg = document.createElement("img");
  const infoDiv = document.createElement("div");
  const brand = document.createElement("h2");
  const name = document.createElement("h2");
  const price = document.createElement("h2");
  const info = document.createElement("p");
  const btnDiv = document.createElement("div");
  const closeInfo = document.createElement("button");
  const buyBtn = document.createElement("button");

  //Ändra element
  modalDiv.className = "modalDiv";
  imgDiv.className = "imgDiv";
  imgDiv.style.backgroundColor = product.bg;
  productImg.className = "productImg";
  productImg.src = product.image;
  infoDiv.className = "infoDiv";
  brand.innerHTML = product.brand;
  name.innerHTML = product.name;
  name.className = "productName";
  price.innerHTML = product.price;
  info.innerHTML = product.info;
  btnDiv.className = "btnDiv";
  closeInfo.textContent = "Stäng information";
  closeInfo.className = "closeInfo";
  buyBtn.textContent = "Köp";
  buyBtn.className = "buyBtn";

  //Lyssna efter klick på Stäng info-knappen
  closeInfo.addEventListener("click", () => modal.close());

  //Placera element
  imgDiv.appendChild(productImg);
  infoDiv.appendChild(brand);
  infoDiv.appendChild(name);
  infoDiv.appendChild(price);
  infoDiv.appendChild(info);
  btnDiv.appendChild(closeInfo);
  btnDiv.appendChild(buyBtn);
  modalDiv.appendChild(imgDiv);
  modalDiv.appendChild(infoDiv);
  modalDiv.appendChild(btnDiv);
  modal.appendChild(modalDiv);

  //Öppna modal
  modal.showModal();
};
