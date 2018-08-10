import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'AddValue'
})

export class AddValuePipe implements PipeTransform {
    transform(value: number): number {
        if (value < 30) {
            value = value + 10;
        }
        return value;
    }
}
