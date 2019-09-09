import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'pinnedFilter'
  })export class PinnedFilter implements PipeTransform {
    transform(items: any[], displayPinned: boolean): any[] {
      if(!items) return [];
      if(!displayPinned) return items;
      return items.filter( it => {
        return (it.payload.doc.data().pinned == true);
      });
     }
  }