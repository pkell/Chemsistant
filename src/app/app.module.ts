import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { APIData } from './api';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompoundService } from './compounds/services/compound.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    /*NgbModule.forRoot(),*/
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(APIData),
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [CompoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
