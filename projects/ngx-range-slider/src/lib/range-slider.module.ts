import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RangeSliderComponent} from './components/range-slider/range-slider.component';

const declarations = [
  RangeSliderComponent
]

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations,
  exports: declarations
})
export class RangeSliderModule {
}
