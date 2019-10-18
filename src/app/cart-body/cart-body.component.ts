import { Component } from "@angular/core";
import { Products } from "../products.model";
@Component({
  selector: "app-cart-body",
  templateUrl: "./cart-body.component.html",
  styleUrls: ["./cart-body.component.css"]
})
export class CartBodyComponent {
  products: Products[] = [
    {
      id: 1,
      name: "Sản phẩm 1",
      description: "Máy tính xách tay",
      image: "https://via.placeholder.com/200x150",
      price: 500000,
      quantity: 2
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      description: "Xe máy",
      image: "https://via.placeholder.com/200x150",
      price: 3000,
      quantity: 4
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      description: "Điều hòa cao cấp",
      image: "https://via.placeholder.com/200x150",
      price: 5000000,
      quantity: 6
    }
  ];
  removeProduct(id: number) {
    const index = this.products.findIndex(pro => pro.id == id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  inputQuantity(id: number, price: number, inputElement: HTMLInputElement) {
    alert (id + price + inputElement.value);
  }

}
