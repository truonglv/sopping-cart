import { Component, Input } from "@angular/core";

@Component({
  selector: "app-cart-footer",
  templateUrl: "./cart-footer.component.html",
  styleUrls: ["./cart-footer.component.css"]
})
export class CartFooterComponent {
  @Input() promoCode: string;
  @Input() subtotal: Number;
  @Input() tax: Number;
  @Input() total: number;

  applyPromoCode() {}
}
