import { Product } from "../models/Product";

//Skapar alla de 9 produkterna
const product1: Product = new Product("innekatt", "KLÖSTRÄD MÅNS", "299kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "1", "#fff4b5");
const product2: Product = new Product("innekatt", "MATSKÅL MAJA", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "2", "#ffd6ed");
const product3: Product = new Product("innekatt", "AKTIVITETSBRÄDA MURRE", "299kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "3", "#91aad9");
const product4: Product = new Product("innekatt", "BÄDD NORA", "399kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "4", "#ffd6ed");
const product5: Product = new Product("innekatt", "KLÖSPELARE PELLE", "299kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "5", "#91aad9");
const product6: Product = new Product("innekatt", "KLOSAX LISEN", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "6", "#fff4b5");
const product7: Product = new Product("innekatt", "JAKTBÅGE TOULOUSE", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "7", "#91aad9");
const product8: Product = new Product("innekatt", "TUNNEL SIMBA", "199kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "8", "#fff4b5");
const product9: Product = new Product("innekatt", "FJÄDERVIPPA SIXTEN", "99kr", "/innekatt-2.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat magna risus, ac aliquet massa condimentum sed.", "9", "#ffd6ed");

//Listan med alla 9 produkter
export const allproducts: Product[] = [product1, product2, product3, product4, product5, product6, product7, product8, product9];
