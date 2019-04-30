import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  productCategories: ProductCategory[];
  selectedCategory = -1;

  constructor(private productService: ProductService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadCategories() {
    this.productService.getCategories().subscribe((res: ProductCategory[]) => {
      const all = {
        id: -1,
        name: 'All'
      } as ProductCategory;
      this.productCategories = [all, ...res];
      this.selectedCategory = -1;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadByCategory(productCategoryId: number) {
    this.selectedCategory = productCategoryId;
    if (productCategoryId <= 0) {
      this.loadProducts();
    } else {
      this.productService.getProductsByCategory(productCategoryId).subscribe((res: Product[]) => {
        this.products = res;
      }, error => {
        this.alertify.error(error);
      });
    }
  }
}
