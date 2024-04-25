import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(items: Pokemon[], searchText: string): Pokemon[] {
    if (!items) return [];
    if (searchText == "" || !searchText) return items;
    if (Number(searchText)) {
      return items.filter(it => {
        return it.id.toString().includes(searchText);
      });
    }

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
