import { Injectable } from '@angular/core';
import { Product } from '../_models/product';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductResolver implements Resolve<Product> {
    constructor(private productService: ProductService, private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        // tslint:disable-next-line:no-string-literal
        return this.productService.getProduct(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/store']);
                return of(null);
            })
        );
    }
}
