
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';


import { MaterialModule } from 'src/app/core/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
