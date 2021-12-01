## Angular Range Slider

A html5 range slider based on `input[type="range"]`

### How to

* Import ```RangeSliderModule``` in your angular app
* simple range with steps example:
```angular2html
<range-slider [min]="10"
              [max]="90"
              [(minValue)]="minValue1"
              [(maxValue)]="maxValue1"
              [step]="10">
  <div>Selected: {{minValue1}}:{{maxValue1}}</div>
</range-slider>
```
* range with list of value as ruler information example:
```
<range-slider name="range"
              [min]="20"
              [max]="77"
              [list]="[20,32,56,77]"
              [minValue]="30"
              [maxValue]="60"
              (rangeChange)="rangeChange($event)"></range-slider>
<div>Selected: {{minValue2}}:{{maxValue2}}</div>
```
* For value changes use `(rangeChange)` output which will emit both min and max values.
* For individual changes use `(minValueChange)` or `(maxValueChange)` or two-way data binding.

## Installing:

```shell
npm install ngx-range-slider --save
```

## App Requirements

* none

#### Licensing

MIT License
