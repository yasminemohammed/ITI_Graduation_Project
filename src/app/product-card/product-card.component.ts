import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product = {

        // initial values of the interface
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: 0,
            count: 0,
        },
    };

    constructor(private router: Router) {}

    ngOnInit(): void {}

    // function to go to product details page
    
    // productDetails(id: number) {
    //     this.router.navigate(['/details', id]);
    // }
}
