import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductManagerComponent } from '../product/Manage/product-manager/product-manager.component';
import { AdminRoutes } from './admin.routing';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ProductManagerComponent
  ],
  imports: [CommonModule, AdminRoutes, FormsModule, SharedModule]
})
export class AdminModule {}
