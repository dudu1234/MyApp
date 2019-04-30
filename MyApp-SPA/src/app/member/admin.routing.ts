import { Routes, RouterModule } from '@angular/router';
import { ProductManagerComponent } from '../product/Manage/product-manager/product-manager.component';

const routes: Routes = [
  {
    path: '',
    component: ProductManagerComponent
  },
  {
    path: 'product-manager',
    component: ProductManagerComponent,
    data: {
      breadcrumb: 'Product Manager'
    }
  }
];

export const AdminRoutes = RouterModule.forChild(routes);
