import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { StoreRoutes } from './store.routing';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductResolver } from '../_resolvers/product.resolver';
import { ProductsComponent } from '../product/products/products.component';
import { ProductCardComponent } from '../product/product-card/product-card.component';
import { OrderListComponent } from '../order/order-list/order-list.component';

@NgModule({
  declarations: [
    ShoppingPageComponent,
    ProductDetailComponent,
    ProductsComponent,
    ProductCardComponent,
    OrderListComponent
  ],
  providers: [ProductResolver],
  imports: [CommonModule, StoreRoutes]
})
export class StoreModule {}
