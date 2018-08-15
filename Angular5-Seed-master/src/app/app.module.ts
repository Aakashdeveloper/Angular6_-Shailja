import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './products/product.component';
import { PipeUppper } from './products/myUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { ProductFilter } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        PipeUppper,
        AddValuePipe,
        ProductFilter,
        StarComponent
    ],
    // Only main component
    bootstrap: [
        AppComponent
    ],
    // All services
    providers: [
        ProductService
    ]
})

export class AppModule {

}
