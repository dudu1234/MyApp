import { Routes, RouterModule } from '@angular/router';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductResolver } from '../_resolvers/product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShoppingPageComponent
  },
  {
    path: 'products/:id/:breadcrumb',
    component: ProductDetailComponent,
    resolve: {
      product: ProductResolver
    }
  }
];

export const StoreRoutes = RouterModule.forChild(routes);
