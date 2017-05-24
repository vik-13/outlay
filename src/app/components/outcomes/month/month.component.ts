import {Component} from "@angular/core";
import {WalletService} from "../../../wallet/wallet.service";

@Component({
  selector: 'month',
  templateUrl: './month.html',
  styleUrls: ['./month.scss']
})
export class MonthComponent {
  data: any;
  total: number = 0;
  groupedData: any = [];

  walletSubscriber: any;

  constructor(private walletService: WalletService) {
    this.sync();
  }

  sync() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      let lastDate = '', date, tempData;
      this.data = data.filter((coin) => {
        return !coin.income ? coin : false;
      });

      this.total = data.reduce((acc, record) => {
        return acc + +record.amount;
      }, 0);

      this.groupedData = [];
      data.forEach((record) => {
        date = record.date.substr(0, 7);
        if (lastDate != date) {
          lastDate = date;
          tempData = {
            date: date,
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
