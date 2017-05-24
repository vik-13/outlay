import {NgModule} from "@angular/core";
import {MdButtonModule, MdDialog, MdDialogModule, MdIconModule, MdMenuModule} from "@angular/material";
import {RecordLineComponent} from "./record-line.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,

    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdDialogModule
  ],
  declarations: [
    RecordLineComponent
  ],
  exports: [
    RecordLineComponent
  ]
})
export class RecordLineModule {}
