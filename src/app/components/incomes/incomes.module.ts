import {NgModule} from "@angular/core";
import {IncomesComponent} from "./incomes.component";
import {CommonModule} from "@angular/common";
import {MdListModule, MdIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,

    MdListModule,
    MdIconModule
  ],
  declarations: [
    IncomesComponent
  ]
})
export class IncomesModule {}
