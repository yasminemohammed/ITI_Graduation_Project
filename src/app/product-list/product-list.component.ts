import { Component, OnInit } from '@angular/core';
import products from '../../assets/product.json';
import { Product } from '../interfaces/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

        // array of type product interface
    products: Array<Product> = products;            // instead of products = products;

    constructor() {}

    ngOnInit(): void {}
}
