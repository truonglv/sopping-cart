import { Component, Input } from "@angular/core";

@Component({
  selector: "app-cart-footer",
  templateUrl: "./cart-footer.component.html",
  styleUrls: ["./cart-footer.component.css"]
})
export class CartFooterComponent {
  subtotal: Number = 45.77;
  tax: Number = 5.0;
  total = 50.77;
  // inputQuantity(id: number, price: number, inputElement: HTMLInputElement) {
  //   alert (id + price + inputElement.value);
  // }
}
