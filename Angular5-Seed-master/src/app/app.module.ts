import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './shared/notFound.component';
import { OrderComponent } from './ordePage/orderpage.component';
import { MyhomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: MyhomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotfoundComponent}
        ]),
        ProductModule
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        NotfoundComponent,
        OrderComponent,
        MyhomeComponent
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
