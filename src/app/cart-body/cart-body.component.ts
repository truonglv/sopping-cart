import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Products } from "../products.model";

@Component({
  selector: "app-cart-body",
  templateUrl: "./cart-body.component.html",
  styleUrls: ["./cart-body.component.css"]
})
export class CartBodyComponent {
  @Output() onClickRemoveProduct = new EventEmitter();
  @Output() onChangeQuantity = new EventEmitter();
  @Input() products: Products[];
  removeProduct(id: number) {
    this.onClickRemoveProduct.emit(id);
  }
  inputQuantity(id: number, price: number, inputElement: HTMLInputElement) {
    this.onChangeQuantity.emit({ id: id, price: price, inputElement: inputElement.value });
  }
}
