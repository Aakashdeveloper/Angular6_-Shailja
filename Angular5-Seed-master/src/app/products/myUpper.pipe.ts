import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class PipeUppper implements PipeTransform {
    transform(value: string, kindof: string) {
        if (kindof === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
