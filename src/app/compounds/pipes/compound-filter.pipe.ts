import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'compoundFilter'
  })export class CompoundFilter implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter( it => {
        return (it.payload.doc.data().name.toLowerCase().includes(searchText)
        || it.payload.doc.data().formula.toLowerCase().includes(searchText));
      });
     }
  }