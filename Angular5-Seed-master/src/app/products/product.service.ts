import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { map } from '../../../node_modules/rxjs/operator/map';

@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private _httpClient: HttpClient) {}

    private extractData(res: Response) {
        return res.json();
    }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl);
    }

    getProductDetail(id): Observable<IProduct[]> {
        return this._http.get('https://ngproductsparam.herokuapp.com/api/getProductDetails?productId=' + id)
                    .map((data: Response) => data.json());
    }


    /*/ Angular 5
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                .map((data: Response) => data.json()) ;
    }
    */


    /*
    //*************** Angular6*************
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                .pipe(map(this.extractData))
    }
    */
    /*
    using promise
    getProducts(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
                .toPromise()
                .then((data: Response) => data.json());
    }
    */
}
