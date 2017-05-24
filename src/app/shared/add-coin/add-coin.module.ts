import {NgModule} from "@angular/core";
import {AddCoinComponent} from "./add-coin.component";
import {
  MdButtonModule, MdIconModule
} from "@angular/material";
import {RecordDialogModule} from "../record-dialog/record-dialog.module";

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,

    RecordDialogModule
  ],
  exports: [
    AddCoinComponent
  ],
  declarations: [
    AddCoinComponent
  ]
})
export class AddCoinModule {}
