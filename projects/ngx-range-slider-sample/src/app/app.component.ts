import {Component} from '@angular/core';
import {RangeChange} from 'ngx-range-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-range-slider-sample';
  minValue1 = 20;
  maxValue1 = 60;

  minValue2?: number;
  maxValue2?: number;

  rangeChange(event: RangeChange) {
    this.minValue2 = event.minValue;
    this.maxValue2 = event.maxValue;
  }
}
