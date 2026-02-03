import { Product } from "../models/Product";

//Skapar alla de 9 produkterna
const product1: Product = new Product("innekatt", "KLÖSTRÄD MÅNS", "299kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "1", "#fff4b5", "scratch");
const product2: Product = new Product("innekatt", "MATSKÅL MAJA", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "2", "#ffd6ed", "eat");
const product3: Product = new Product("innekatt", "AKTIVITETSBRÄDA MURRE", "299kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "3", "#91aad9", "play");
const product4: Product = new Product("innekatt", "BÄDD NORA", "399kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "4", "#ffd6ed", "rest");
const product5: Product = new Product("innekatt", "KLÖSPELARE PELLE", "299kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "5", "#91aad9", "scratch");
const product6: Product = new Product("innekatt", "KLOSAX LISEN", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "6", "#fff4b5", "care");
const product7: Product = new Product("innekatt", "JAKTBÅGE TOULOUSE", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "7", "#91aad9", "hunt");
const product8: Product = new Product("innekatt", "TUNNEL SIMBA", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "8", "#fff4b5", "play");
const product9: Product = new Product("innekatt", "FJÄDERVIPPA SIXTEN", "99kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "9", "#ffd6ed", "hunt");

//Listan med alla 9 produkter
export const allproducts: Product[] = [product1, product2, product3, product4, product5, product6, product7, product8, product9];

//Listor baserade på aktiviteter
export const playProducts: Product[] = allproducts.filter((product) => product.activity === "play");
export const restProducts: Product[] = allproducts.filter((product) => product.activity === "rest");
export const eatProducts: Product[] = allproducts.filter((product) => product.activity === "eat");
export const huntProducts: Product[] = allproducts.filter((product) => product.activity === "hunt");
export const scratchProducts: Product[] = allproducts.filter((product) => product.activity === "scratch");
export const careProducts: Product[] = allproducts.filter((product) => product.activity === "care");
