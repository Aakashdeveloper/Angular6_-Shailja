import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';
import { ProductComponent } from './products/product.component';
import { PipeUppper } from './products/myUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { ProductFilter } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetailComponent } from './products/product-detail.copmonent';
import { OrderComponent } from './ordePage/orderpage.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ])
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        PipeUppper,
        AddValuePipe,
        ProductFilter,
        StarComponent,
        NotFoundComponent,
        ProductDetailComponent,
        OrderComponent,
        HomeComponent

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
