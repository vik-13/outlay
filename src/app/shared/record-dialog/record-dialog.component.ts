import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'record-dialog',
  templateUrl: './record-dialog.html',
  styleUrls: ['./record-dialog.scss']
})
export class RecordDialogComponent {

  data = {
    amount: 0,
    date: '',
    description: '',
    currency: 'pln',
    income: false
  };

  constructor(public dialogRef: MdDialogRef<RecordDialogComponent>) {}

  submit(form) {
    this.dialogRef.close(form.value);
  }
}
