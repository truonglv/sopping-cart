import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cart-footer",
  templateUrl: "./cart-footer.component.html",
  styleUrls: ["./cart-footer.component.css"]
})
export class CartFooterComponent {
  promoCode: string;
  @Input() subtotal: Number;
  @Input() tax: Number;
  @Input() total: number;
  @Output() onApplyPromoCode = new EventEmitter();
  applyPromoCode() {
    this.onApplyPromoCode.emit(this.promoCode);
  }
}
