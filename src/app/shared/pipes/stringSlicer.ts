import { Pipe, PipeTransform } from "@angular/core";
import { IEbike } from '../interfaces/ebike';

@Pipe({name: 'stringSlicer'})
export class StringSlicer implements PipeTransform {
    transform(value: IEbike[]) {
        if (value.length > 1) {
            return `${value[0].brand} and more...`
        }

        return value[0].brand;
    }
}