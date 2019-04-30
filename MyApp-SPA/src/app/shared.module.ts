import { NgModule } from '@angular/core';
import { RemoveImgPrefixPipe } from './_pipes/remove-img-prefix.pipe';
import { EnumToTextPipe } from './_pipes/enum-to-text.pipe';
import { ProductTableFilterPipe } from './_pipes/product-table-filter.pipe';

@NgModule({
  declarations: [RemoveImgPrefixPipe, EnumToTextPipe, ProductTableFilterPipe],
  exports: [RemoveImgPrefixPipe, EnumToTextPipe, ProductTableFilterPipe]
})
export class SharedModule {}
