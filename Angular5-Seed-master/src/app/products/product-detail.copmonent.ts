import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product.model';

@Component({
    templateUrl: './product-detail.component.html'
})

export class DetailComponent implements OnInit {
    id: number;
    name: string;
    image: String = 'vc';
    description: String = 'd';
    detail: any[];

    constructor(private _activeroute: ActivatedRoute,
                private _productService: ProductService) {}

    ngOnInit(): void {
        this.id = +this._activeroute.snapshot.params['id'];


        /*this._activeroute
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.image = params['img'];
                this.description = params['desc'];
            });*/

        this._productService.getProductDetail(this.id)
            .subscribe((data) => this.detail = data);
    }
}
