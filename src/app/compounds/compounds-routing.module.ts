import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailComponent } from './compound-detail/compound-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CompoundListComponent
  },
  {
    path: ':display',
    component: CompoundListComponent
  },
  {
    path: 'compound/:id',
    component: CompoundDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompoundsRoutingModule { }
