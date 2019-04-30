import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory } from 'src/app/_models/product';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ProductService } from 'src/app/_services/product.service';
import { ProductStatus } from 'src/app/_models/enums';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  products: Product[] = [];
  productCategories: ProductCategory[] = [];
  searchTest = '';
  ProductStatus = ProductStatus;

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
      this.productCategories = res;
    }, error => {
      this.alertify.error(error);
    });
  }
}
