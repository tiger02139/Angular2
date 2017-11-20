import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';  //ADDED ROUTER_DIRECTIVES **********************

import { IProduct } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../ratings/ratings.component';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent, ROUTER_DIRECTIVES]  //ADDED ROUTER_DIRECTIVES **********************
})
export class ProductDetailComponent implements OnActivate {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _productService: ProductService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getProduct(id);
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
