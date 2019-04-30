import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../_models/product';
import { ProductStatus } from 'src/app/_models/enums';

@Pipe({
  name: 'productTableFilter'
})
export class ProductTableFilterPipe implements PipeTransform {
  transform(items: Product[], searchTest: string): any {
    if (!items || !searchTest) {
      return items;
    }
    searchTest = searchTest.toLowerCase();
    const ProductStatusEnum = ProductStatus;
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTest) ||
      item.productCategory.name.toLowerCase().includes(searchTest) ||
      item.title.toLowerCase().includes(searchTest) ||
      item.description.toLowerCase().includes(searchTest) ||
      item.id.toString() === searchTest ||
      ProductStatusEnum[item.status].toLowerCase().includes(searchTest));
  }
}
