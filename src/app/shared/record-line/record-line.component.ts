import {Component, Input} from "@angular/core";
import {RecordDialogComponent} from "../record-dialog/record-dialog.component";
import * as moment from 'moment';
import {MdDialog} from "@angular/material";
import {WalletService} from "../../wallet/wallet.service";

@Component({
  selector: 'record-line',
  templateUrl: './record-line.html',
  styleUrls: ['./record-line.scss']
})
export class RecordLineComponent {
  @Input() record: Object = {};

  constructor(private dialog: MdDialog, private walletService: WalletService) {

  }

  edit(record) {
    let dialogRef = this.dialog.open(RecordDialogComponent);
    dialogRef.componentInstance.data = record;
    dialogRef.afterClosed().subscribe((params) => {
      if (params) {
        params.created = +moment(params.date);
        this.walletService.update(record.$key, params);
      }
    });

  }

  remove(record) {
    this.walletService.remove(record.$key);
  }
}
