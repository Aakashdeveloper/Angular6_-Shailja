import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    // styles: ['thead{color:green}', 'h3{color:red}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '@@@@@@@Product list';
    showTable: Boolean = true;
    showImage: Boolean = false;
    filterText: String;
    imageWidth: Number = 150;
    products: IProduct[];

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    /*
    using Promise
    ngOnInit(): void {
        this._productService.getProducts()
            .then((data) => this.products = data);
    }*/

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
    }

    onDataRecive(message: string): void {
        this.title = '@@@@@@@Product list>>>> ' + message;
    }
}



/*

string
number
boolean

One Way
--Data  {{ }}
--Property  []
--Event   ()
Two Binding [()]

a coding pattern in which class receives the instance of object
it need from external source rather than creating itself
*/
