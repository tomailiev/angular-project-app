import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'priceString' })
export class PriceStringPipe implements PipeTransform {
    transform(value: number) {
        return `$${value.toFixed(2)}`
    }
}