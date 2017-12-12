import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstcharuppercase'
})
export class FirstCharUpperCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
  }

}
