import { Pipe, PipeTransform } from '@angular/core';
import { ICompound } from '../compound.model';
@Pipe({
    name: 'pinnedFilter'
  })export class PinnedFilter implements PipeTransform {
    transform(compounds: ICompound[], displayPinned: boolean): any[] {
      if(!compounds) return [];
      if(!displayPinned) return compounds;
      return compounds.filter( c => {
        return (c.pinned == true);
      });
     }
  }