import { Component, Input } from '@angular/core';
import { Products } from '../products.model';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent {
 @Input() itemnumber: number;
}
