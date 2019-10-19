import { Component, OnInit, DoCheck } from "@angular/core";
import { Products } from "./products.model";
import { ProductService } from "./product.service";
import { PromocodeService } from "./promocode.service";
import { element } from "protractor";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, DoCheck {
  title = "xin chào theo giới";
  subtotal: number = 0;
  tax: number;
  total: number;
  itemnumber: number;
  promoCode: string = "";
  products: Products[];
  constructor(public productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.getProduct();
  }
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
    this.productService.RemoveProduct(id);
  }
  HandleChangeQuantity(productsss: any) {
    const index = this.products.findIndex(pro => pro.id == productsss.id);
    this.products[index].quantity = +productsss.inputElement;
  }
  HandleOnApplyPromoCode(promo: string) {
    this.promoCode = promo;
  }
}
