import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a, b) => {
      if(a[args] < b[args]){
        return 1;
      } else if(a[args] > a[args]) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}
