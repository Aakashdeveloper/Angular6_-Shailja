import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { PipeUppper } from './myUpper.pipe';
import { AddValuePipe } from './addValue.pipe';
import { ProductFilter } from './filterProduct.pipe';
import { DetailComponent } from './product-detail.copmonent';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/sharedModule';

@NgModule({
    imports: [

        RouterModule.forChild([
            {path: 'product', component: ProductComponent},
            {path: 'product/:id',  component: DetailComponent}
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        PipeUppper,
        AddValuePipe,
        ProductFilter,
        DetailComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
