import { Injectable } from "@angular/core";
import { Products } from "./products.model";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: Products[];
  getProduct(): Products[] {
    this.products = [
      {
        id: 1,
        name: "Sản phẩm 1",
        description: "Máy tính xách tay",
        image: "https://via.placeholder.com/200x150",
        price: 1000,
        quantity: 2
      },
      {
        id: 2,
        name: "Sản phẩm 2",
        description: "Xe máy",
        image: "https://via.placeholder.com/200x150",
        price: 3000,
        quantity: 2
      },
      {
        id: 3,
        name: "Sản phẩm 3",
        description: "Điều hòa cao cấp",
        image: "https://via.placeholder.com/200x150",
        price: 3000,
        quantity: 2
      }
    ];
    return this.products;
  }
  RemoveProduct(id: number) {
    const index = this.products.findIndex(pro => pro.id == id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
