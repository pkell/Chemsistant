import { Pipe, PipeTransform } from '@angular/core';
import { ICompound } from '../models/compound.model';
@Pipe({
    name: 'compoundFilter'
  })export class CompoundFilter implements PipeTransform {
    transform(compounds: ICompound[], searchText: string): any[] {
      if(!compounds) return [];
      if(!searchText) return compounds;
      searchText = searchText.toLowerCase();
      return compounds.filter( c => {
        return (c.name.toLowerCase().includes(searchText)
        || c.formula.toLowerCase().includes(searchText));
      });
     }
  }