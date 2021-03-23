import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): unknown {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = 1;



    if (sortDirection === 'desc') {
      multiplier = -1;
    }



    value.sort((a: any, b: any) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    }
    );



    //if (sortField == 'prodexpdate') {
    //  const sortedValues = value.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    //  return sortedValues;
    //}



    return value;
  }



}
