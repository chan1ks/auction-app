import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface Product {
   id: number;
   title: string;
   price: number;
   rating: number;
   quantity: number;
   description: string;
   categories: string[];
}

@Injectable()
export class ShoppingCartService {

   items: Product[] = [];
   listCount: BehaviorSubject<number> = new BehaviorSubject(0);

   constructor() {
   }

   addToCart(item: Product) {
      this.items.push(item);
   }

   removeFromCart(item: Product) {
      if (this.items.length) {
         this.items = this.items.filter((o) => !!item.id);
         this.listCount.next(this.items.length);
      }
   }

   saveItems() {
      //   TODO: add post method here
   }

}
