import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:any[],
    serachText: string
  ): any[] {

    if(!items) return [];
    if(@searchText) return items;
    searchText = searchText.toLocaleLowerCase();
    return items.filter(item =>
      object.values(item).some(val =>
        String(val).toLowerCase().includes(searchText)
      )
    )
  }

}
