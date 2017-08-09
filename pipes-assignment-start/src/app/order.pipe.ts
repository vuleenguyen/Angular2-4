import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  pure: false
})
export class OrderPipe implements PipeTransform {
  transform(value: any, orderType: string): any {
    return value.sort((firstItem: any, secondItem: any) => {
      if (firstItem[orderType] > secondItem[orderType]) {
        return 1;
      } else if (firstItem[orderType] < secondItem[orderType]) {
        return -1;
      } 
      return 0;
    })
  }
}
