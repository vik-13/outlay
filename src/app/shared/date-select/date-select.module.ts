import {NgModule} from "@angular/core";
import {DateSelectComponent} from "./date-select.component";
import {MdSelectModule} from '@angular/material';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdSelectModule
  ],
  declarations: [
    DateSelectComponent
  ],
  exports: [
    DateSelectComponent
  ]
})
export class DateSelectModule {

}
