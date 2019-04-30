import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ProductService } from 'src/app/_services/product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data.product;
    });
  }
}
