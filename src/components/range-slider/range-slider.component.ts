import {AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'range-slider',
  templateUrl: 'range-slider.component.html',
  styleUrls: ['range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit, AfterViewChecked {


  @ViewChild('ghost')
  ghost: ElementRef;
  @ViewChild('minOut')
  minOut: ElementRef;
  @ViewChild('maxOut')
  maxOut: ElementRef;
  @Input()
  list: number[];
  @Input()
  name: string;
  @Input()
  min = 0;
  @Input()
  max = 100;
  @Input()
  minValue: number;
  @Input()
  maxValue: number;
  @Input()
  step = 1;
  @Output()
  rangeChange: EventEmitter<{
    minValue: number
    maxValue: number
  }> = new EventEmitter();

  submit() {
    this.rangeChange.emit({
      minValue: this.minValue,
      maxValue: this.maxValue
    });
  }

  setLow() {
    if (this.ghost && this.minOut) {
      const width = this.ghost.nativeElement.getBoundingClientRect().width;
      const val = ((this.minValue - this.min) / (this.max - this.min));
      this.ghost.nativeElement.style.setProperty('--low', 100 * val + 1 + '%');
      this.minOut.nativeElement.style.setProperty('--pos', (width * val) - (10 * val) - 3 + 'px');
    }
  }

  setHigh() {
    if (this.ghost) {
      const width = this.ghost.nativeElement.getBoundingClientRect().width;
      const val = ((this.maxValue - this.min) / (this.max - this.min));
      this.ghost.nativeElement.style.setProperty('--high', 100 * val - 1 + '%');
      this.maxOut.nativeElement.style.setProperty('--pos', (width * val) - (10 * val) - 3 + 'px');
    }
  }

  ngOnInit(): void {
    this.minValue = this.minValue || this.min;
    this.maxValue = this.maxValue || this.max;
  }

  ngAfterViewChecked(): void {
    this.setLow();
    this.setHigh();
  }
}
