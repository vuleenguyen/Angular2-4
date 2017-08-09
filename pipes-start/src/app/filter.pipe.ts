import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, filterString: string, typeFilter: any): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const result = [];
    for(let item of value) {
      if (item[typeFilter] === filterString) {
        result.push(item);
      }
    }
    return result;
  }

}
