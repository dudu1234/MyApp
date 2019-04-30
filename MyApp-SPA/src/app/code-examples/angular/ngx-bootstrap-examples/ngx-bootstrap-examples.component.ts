import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from 'ngx-gallery';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-ngx-bootstrap-examples',
  templateUrl: './ngx-bootstrap-examples.component.html',
  styleUrls: ['./ngx-bootstrap-examples.component.css']
})
export class NgxBootstrapExamplesComponent implements OnInit {
  products: Product[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private productService: ProductService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.loadProducts();

    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: NgxGalleryImageSize.Contain
      },
      // max-width 400
      {
        breakpoint: 400,
        width: '200px',
        height: '200px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 200
      {
        breakpoint: 200,
        preview: false
      }
    ];
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (res: Product[]) => {
        this.products = res;
        this.galleryImages = [];
        this.products.forEach(product => {
          this.galleryImages = [...this.galleryImages, {
            small: product.smallImage,
            medium: product.smallImage,
            big: product.bigImage
          }];
        });
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
