import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][phone]',
  host: {
    '(ngModelChange)': 'onInputChange($event)'
  },
})
export class MaskDirective {

  constructor(public model: NgControl) {}

  onInputChange(value) {
    try{
      var x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    } catch(e){}


        this.model.valueAccessor.writeValue(value);
  }

}