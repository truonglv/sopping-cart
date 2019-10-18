import { Component, Input } from "@angular/core";
import { Products } from '../products.model';


@Component({
  selector: "app-cart-body",
  templateUrl: "./cart-body.component.html",
  styleUrls: ["./cart-body.component.css"]
})
export class CartBodyComponent {
@Input() products : Products[]
  removeProduct(id: number) {
    const index = this.products.findIndex(pro => pro.id == id);
    if (index !== -1) {
      alert("Đã xóa sản phẩm " + this.products[index].name);
      this.products.splice(index, 1);
    }
  }
  inputQuantity(id: number, price: number, inputElement: HTMLInputElement) {

  }
}
