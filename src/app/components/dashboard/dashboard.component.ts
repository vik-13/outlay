import {Component} from '@angular/core';
import {WalletService} from '../../wallet/wallet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  data: any = {
    total: 0,
    groupedByMonths: []
  };


  walletSubscriber: any;

  constructor(private walletService: WalletService) {
    this.sync();
  }

  sync() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      let lastDate = '', date, tempData;

      this.data.total = data.reduce((acc, record) => {
        return acc + +record.amount;
      }, 0);

      this.data.groupedByMonths = [];
      data.forEach((record) => {
        date = record.date.substr(0, 7);
        if (lastDate !== date) {
          lastDate = date;
          tempData = {
            date: date,
            amount: 0,
            records: []
          };
          tempData.amount += +record.amount;
          tempData.records.push(record);
          this.data.groupedByMonths.push(tempData);
        } else {
          tempData.amount += +record.amount;
          tempData.records.push(record);
        }
      });

      if (this.data.groupedByMonths.length) {
        this.data.lastMonth = this.data.groupedByMonths[this.data.groupedByMonths.length - 1].amount
      } else {
        this.data.lastMonth = 0;
      }

      console.log(this.data);
    });
  }

  ngOnDestroy() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
