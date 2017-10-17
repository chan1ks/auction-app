import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products/products.service';

export function positiveNumberValidator(control: FormControl): any {
   if (!control.value) return null;
   const price = Number(control.value);
   return price === null ||
   typeof price === 'number' &&
   price > 0 ? null : {positivenumber: true};
}

@Component({
   selector: 'auction-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   formModel: FormGroup;
   categories: string[];

   constructor(private fb: FormBuilder, private productService: ProductsService) {
      this.categories = this.productService.getAllCategories();

      this.formModel = this.fb.group({
         title: [null, Validators.minLength(3)],
         price: [null, positiveNumberValidator],
         category: -1,
      });
   }

   ngOnInit() {
   }

   onSearch() {
      if (this.formModel.valid) {
         console.log(this.formModel.value);
      }
   }

}
