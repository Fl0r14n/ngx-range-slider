import {AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

export interface RangeChange {
  minValue?: number
  maxValue?: number
}

@Component({
  selector: 'range-slider',
  templateUrl: 'range-slider.component.html',
  styleUrls: ['range-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RangeSliderComponent implements OnInit, AfterViewChecked {


  @ViewChild('ghost')
  ghost: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('minOut')
  minOut: ElementRef<HTMLSpanElement> | undefined;
  @ViewChild('maxOut')
  maxOut: ElementRef<HTMLSpanElement> | undefined;
  @Input()
  list: number[] | undefined;
  @Input()
  name: string | undefined;
  @Input()
  min = 0;
  @Input()
  max = 100;
  @Input()
  minValue?: number;
  @Output()
  minValueChange: EventEmitter<number> = new EventEmitter();
  @Input()
  maxValue?: number;
  @Output()
  maxValueChange: EventEmitter<number> = new EventEmitter();
  @Input()
  step = 1;
  @Output()
  rangeChange: EventEmitter<RangeChange> = new EventEmitter();

  submit() {
    this.minValueChange.emit(this.minValue);
    this.maxValueChange.emit(this.maxValue);
    this.rangeChange.emit({
      minValue: this.minValue,
      maxValue: this.maxValue
    });
  }

  setLow() {
    if (this.ghost && this.minOut) {
      const width = this.ghost.nativeElement.getBoundingClientRect().width;
      const val = (((this.minValue || 0) - this.min) / (this.max - this.min));
      this.ghost.nativeElement.style.setProperty('--low', 100 * val + 1 + '%');
      this.minOut.nativeElement.style.setProperty('--pos', (width * val) - (10 * val) - 3 + 'px');
    }
  }

  setHigh() {
    if (this.ghost) {
      const width = this.ghost.nativeElement.getBoundingClientRect().width;
      const val = (((this.maxValue || 0) - this.min) / (this.max - this.min));
      this.ghost.nativeElement.style.setProperty('--high', 100 * val - 1 + '%');
      this.maxOut?.nativeElement.style.setProperty('--pos', (width * val) - (10 * val) - 3 + 'px');
    }
  }

  ngOnInit(): void {
    this.minValue = this.minValue || this.min;
    this.maxValue = this.maxValue || this.max;
    this.rangeChange.emit({
      minValue: this.minValue,
      maxValue: this.maxValue
    });
  }

  ngAfterViewChecked(): void {
    this.setLow();
    this.setHigh();
  }

  get datalistName(): string {
    return `${this.name || ''}_datalist`;
  }
}
