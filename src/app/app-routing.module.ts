import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'compounds',
      loadChildren: 'app/compounds/compounds.module#CompoundsModule'
    },
    {
      path: 'compound',
      loadChildren: 'app/compounds/compounds.module#CompoundsModule'
    },
    {
      path: '',
      redirectTo: 'compounds',
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
