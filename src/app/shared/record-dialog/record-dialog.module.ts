import {NgModule} from "@angular/core";
import {RecordDialogComponent} from "./record-dialog.component";
import {FormsModule} from "@angular/forms";
import {
  MdButtonModule, MdChipsModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule,
  MdSlideToggleModule
} from "@angular/material";
import {DateSelectModule} from "../date-select/date-select.module";

@NgModule({
  imports: [
    FormsModule,

    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdSlideToggleModule,
    MdChipsModule,
    MdSelectModule,

    DateSelectModule,
  ],
  declarations: [
    RecordDialogComponent
  ],
  entryComponents: [
    RecordDialogComponent
  ],
  exports: [
    RecordDialogComponent
  ]
})
export class RecordDialogModule {}
