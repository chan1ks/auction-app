import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ProductDetailsComponent} from './components/products/product-details/product-details.component';

export const routes: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent},
   {path: 'products/:productId', component: ProductDetailsComponent},
   {path: 'about', component: AboutComponent},
   {path: 'services', component: ServicesComponent},
   {path: '**', redirectTo: 'home'}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}
