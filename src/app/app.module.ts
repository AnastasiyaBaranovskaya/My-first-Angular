import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { StudioComponent } from './studio/studio.component';
import { Bedroom1Component } from './bedroom1/bedroom1.component';
import { Bedroom2Component } from './bedroom2/bedroom2.component';
import { Bedroom3Component } from './bedroom3/bedroom3.component';
import { Bedroom4Component } from './bedroom4/bedroom4.component';
import { PenthouseComponent } from './penthouse/penthouse.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    StudioComponent,
    Bedroom1Component,
    Bedroom2Component,
    Bedroom3Component,
    Bedroom4Component,
    PenthouseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
