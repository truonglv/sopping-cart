import { Component, DoCheck } from "@angular/core";
import { Products } from "./products.model";
import { element } from "protractor";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements DoCheck {
  title = "xin chào theo giới";
  subtotal: number = 0;
  tax: number;
  total: number;
  itemnumber: number;
  promoCode: string = "";
  products: Products[] = [
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
  ngDoCheck() {
    let sub: number = 0;
    this.products.forEach(pro => {
      sub += pro.price * pro.quantity;
    });
    this.subtotal = sub;
    this.tax = (sub * 10) / 100;
    this.total = sub + this.tax;
    this.itemnumber = this.products.length;
    if (this.promoCode != "") {
      this.total =
        this.subtotal + this.tax - ((this.subtotal + this.tax) * 30) / 100;
    }
  }
  HandleClickRemoveProduct(id: number) {
    const index = this.products.findIndex(pro => pro.id == id);
    if (index !== -1) {
      alert("Đã xóa sản phẩm " + this.products[index].name);
      this.subtotal =
        this.subtotal -
        this.products[index].price * this.products[index].quantity;
      this.products.splice(index, 1);
    }
  }
  HandleChangeQuantity(productsss: any) {
    const index = this.products.findIndex(pro => pro.id == productsss.id);
    this.products[index].quantity = +productsss.inputElement;
  }
  HandleOnApplyPromoCode(promoCode: string) {
    alert("Ban duoc giam gia 30%");
    this.promoCode = promoCode;
  }
}
