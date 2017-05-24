import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {WalletService} from "../../wallet/wallet.service";
import * as moment from 'moment';
import {RecordDialogComponent} from "../record-dialog/record-dialog.component";

@Component({
  selector: 'add-coin',
  templateUrl: './add-coin.html',
  styleUrls: ['./add-coin.scss']
})
export class AddCoinComponent {

  constructor(private dialog: MdDialog, private walletService: WalletService) {}

  showDialog() {
    let dialogRef = this.dialog.open(RecordDialogComponent);
    dialogRef.afterClosed().subscribe((params) => {
      if (params) {
        params.created = +moment(params.date);
        this.walletService.add(params);
      }
    });
  }
}
