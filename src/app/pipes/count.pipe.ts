import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'count',
})
export class CountPipe implements PipeTransform {
    transform(value: number, ...args: unknown[]): string {

        let result = (value > 0) ? "In Stock" : "Out Of Stock";
        return result;
    }
}
