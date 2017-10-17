import { NgModule } from '@angular/core';

import {ProductsService} from './products/products.service';
import {ShoppingCartService} from './shopping-cart/shopping-cart.service';
import {BidService} from './bid-service/bid.service';
import {WebSocketService} from './websocket-observable-service/web-socket-observable.service';

export const Services = [
   BidService,
   ProductsService,
   WebSocketService
];

@NgModule({
  providers: [
     ProductsService,
     ShoppingCartService,
     BidService,
     WebSocketService
  ]
})
export class ApiModule { }
