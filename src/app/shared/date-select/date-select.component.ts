import {Component, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import * as moment from 'moment';

@Component({
  selector: 'date-select',
  templateUrl: './date-select.html',
  styleUrls: ['./date-select.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateSelectComponent),
      multi: true
    }
  ]
})

export class DateSelectComponent implements ControlValueAccessor{
  _date: string = moment().format('YYYY-MM-DD');

  propagateChange = (_: any) => {};

  days: Array<number>;
  months: Array<any>;
  years: Array<number>;

  selectedDate = {
    day: 1,
    month: 1,
    year: 2017
  };

  constructor() {
    //Todo: Should be populated with real data...
    this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    this.months = [{code: 0, name: 'January'},
      {code: 1, name: 'February'},
      {code: 2, name: 'March'},
      {code: 3, name: 'April'},
      {code: 4, name: 'May'},
      {code: 5, name: 'June'},
      {code: 6, name: 'July'},
      {code: 7, name: 'August'},
      {code: 8, name: 'September'},
      {code: 9, name: 'October'},
      {code: 10, name: 'November'},
      {code: 11, name: 'December'}];
    this.years = [2016, 2017, 2018, 2019, 2020];

    this.selectedDate.year = moment(this._date).year();
    this.date = this._date;
  }

  get date() {
    return this._date;
  }

  set date(date) {
    this._date = date;
    this.selectedDate.day = moment(this._date).date();
    this.selectedDate.month = moment(this._date).month();
    this.selectedDate.year = moment(this._date).year();
    this.propagateChange(this._date);
  }

  changeDate() {
    this.date = moment(this.selectedDate).format('YYYY-MM-DD');
  }

  writeValue(date: any) {
    if (date) {
      this.date = date;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
