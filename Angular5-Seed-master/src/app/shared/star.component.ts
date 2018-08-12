import { Component, OnChanges, Input,
        Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string>  = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}



/*
constructure
ngOnChanges
ngOnInit
onDestroy

var a = 10
out = "my age is "+10
out = `my age is ${a}`

function add(a,b){
    return a+b
}

var sum = add(1,2)
*/
