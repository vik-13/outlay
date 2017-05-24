import {NgModule} from "@angular/core";
import {OutcomesComponent} from "./outcomes.component";
import {MdListModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {DayComponent} from "./day/day.component";
import {MonthComponent} from "./month/month.component";
import {RecordDialogModule} from "../../shared/record-dialog/record-dialog.module";
import {RecordLineModule} from "../../shared/record-line/record-line.module";

@NgModule({
  imports: [
    CommonModule,

    MdListModule,

    RecordDialogModule,
    RecordLineModule
  ],
  declarations: [
    OutcomesComponent,

    DayComponent,
    MonthComponent
  ]
})
export class OutcomesModule {}
