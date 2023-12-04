import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() lable: string;
  @Input() type: string;

  value: string = '';
  isTouched = false;

  constructor() {}

  onChange(value: string) {
    this.value = value;
    this.propagateChange(value);
    if (!this.isTouched) {
      this.isTouched = true;
      this.propagateFirstTouch();
    }
  }

  propagateFirstTouch = () => {};

  propagateChange(value: string) {
    value;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateFirstTouch = fn;
  }
}
