import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  itemCount: number;

  constructor(private shoppinCartService: ShoppingCartService) { }

  ngOnInit() {
    this.itemCount = this.shoppinCartService.listCount.getValue();
  }

}
