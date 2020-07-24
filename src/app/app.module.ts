import { LeapComponent } from './leapyear/leap.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TemperatureConverter } from './temperatureConverter/temperatureConverter.component';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { HeaderComponent } from './layout/header.component';
import { DayComponent } from './dayfinder/day.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverter,
    HeaderComponent,
    LeapComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    RouterModule.forRoot([
      { path:'temperature', component: TemperatureConverter }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
