import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
