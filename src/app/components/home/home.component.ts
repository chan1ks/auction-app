import { Component, OnInit } from '@angular/core';
import {Product, ProductsService} from '../../services/products/products.service';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Observable<Product[]>;
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productService: ProductsService) {
    this.products = this.productService.getProducts();

    this.titleFilter.valueChanges
       .debounceTime(100)
       .subscribe(
          value => this.filterCriteria = value,
          error => console.error(error));
  }

  ngOnInit() {
  }

}
