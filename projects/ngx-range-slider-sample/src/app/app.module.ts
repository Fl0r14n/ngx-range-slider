import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RangeSliderModule} from 'ngx-range-slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RangeSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
