import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent
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
