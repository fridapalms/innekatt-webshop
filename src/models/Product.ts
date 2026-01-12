export class Product {
  brand: string;
  name: string;
  price: string;
  image: string;
  info: string;
  id: string;
  bg: string;

  constructor(brand: string, name: string, price: string, image: string, info: string, id: string, bg: string) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.image = image;
    this.info = info;
    this.id = id;
    this.bg = bg;
  }
}
