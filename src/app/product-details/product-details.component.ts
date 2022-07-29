import { Component, OnInit } from '@angular/core';
import products from '../../assets/product.json';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    products: Array<Product> = products;

    productDetails: Product | undefined = {

        // initial values of the interface
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: "",
        image: '',
        rating: {
            rate: 0,
            count: 0,
        },
    };

    constructor(private activatedRoute: ActivatedRoute) {
        console.log(this.activatedRoute.snapshot.params['id']);
        const activatedRouteId = this.activatedRoute.snapshot.params['id'];

        this.productDetails = this.products.find(
            (Product) => Product.id == activatedRouteId
        );
    }

    ngOnInit(): void {}
}
