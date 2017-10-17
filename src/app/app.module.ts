import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routing.module';
import {ApiModule} from './services/api.module';

import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductItemComponent} from './components/products/product-item/product-item.component';
import {SearchComponent} from './components/search/search.component';
import {ServicesComponent} from './components/services/services.component';
import {StarsComponent} from './components/stars/stars.component';
import {HomeComponent} from './components/home/home.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

@NgModule({
   declarations: [
      AppComponent,
      AboutComponent,
      CarouselComponent,
      FooterComponent,
      NavbarComponent,
      ProductItemComponent,
      SearchComponent,
      ServicesComponent,
      StarsComponent,
      HomeComponent,
      ProductDetailsComponent,
   ],
   imports: [
      BrowserModule,
      HttpModule,
      SharedModule,

      AppRoutingModule,
      ApiModule
   ],
   bootstrap: [AppComponent]
})
export class AppModule {
}
