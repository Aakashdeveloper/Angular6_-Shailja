import { Component } from '@angular/core';

@Component({
    selector: 'app-comp',
    template: `
        <div>
            <h1>This is main page</h1>
            <app-product></app-product>
            <app-book></app-book>
        </div>
    `
})

export class AppComponent {

}
