import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../services/products/products.service';

@Component({
   selector: 'auction-product-item',
   templateUrl: './product-item.component.html',
   styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

   @Input() product: Product;

   @Output() updateProducts: EventEmitter<any> = new EventEmitter();

   maxQuantity: number;

   constructor() {
   }

   ngOnInit() {
      this.maxQuantity = this.product.quantity;
   }

   addItem() {
      if (this.product.quantity < this.maxQuantity) {
         this.updateProducts.emit({count: 1, product: this.product});
      }

      this.updateProducts.emit({count: 1, product: this.product});
   }

   removeItem() {
      if (this.product.quantity) {
         this.updateProducts.emit({count: -1, product: this.product});
      }

   }

}
