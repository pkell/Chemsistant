import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginPageGuard } from './core/guards/login-page.guard';

const routes: Routes = [
    {
      path: 'compounds',
      loadChildren: 'app/compounds/compounds.module#CompoundsModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'compound',
      loadChildren: 'app/compounds/compounds.module#CompoundsModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [LoginPageGuard]
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
