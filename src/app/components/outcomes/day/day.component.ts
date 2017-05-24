import {Component} from "@angular/core";
import {WalletService} from "../../../wallet/wallet.service";

@Component({
  selector: 'day',
  templateUrl: './day.html',
  styleUrls: ['./day.scss']
})
export class DayComponent {
  total: number = 0;
  groupedData: any = [];

  walletSubscriber: any;

  constructor(private walletService: WalletService) {
    this.sync();
  }

  sync() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      let lastDate = '', tempData;

      this.total = data.reduce((acc, record) => {
        return acc + +record.amount;
      }, 0);

      this.groupedData = [];
      data.forEach((record) => {
        if (lastDate != record.date) {
          lastDate = record.date;
          tempData = {
            date: lastDate,
            amount: 0,
            records: []
          };
          tempData.amount += +record.amount;
          tempData.records.push(record);
          this.groupedData.push(tempData);
        } else {
          tempData.amount += +record.amount;
          tempData.records.push(record);
        }
      });
    });
  }

  ngOnDestroy() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
