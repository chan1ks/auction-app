import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material';

import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import { FilterPipePipe } from './pipes/filter-pipe/filter-pipe.pipe';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
   ],
   declarations: [
      ShoppingCartComponent,
      FilterPipePipe
   ],
   exports: [
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,

      ShoppingCartComponent,
      FilterPipePipe
   ]
})
export class SharedModule {
}
