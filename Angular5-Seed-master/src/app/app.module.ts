import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './products/product.component';
import { PipeUppper } from './products/myUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { ProductFilter } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule
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
    providers: []
})

export class AppModule {

}
