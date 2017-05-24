import {Component} from "@angular/core";
import {WalletService} from "../../wallet/wallet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'outcomes',
  templateUrl: './outcomes.html',
  styleUrls: ['./outcomes.scss']
})
export class OutcomesComponent {
  data: any;
  groupedData: any = [];
  groupBy: string = 'record';

  routeSubscriber: any;
  walletSubscriber: any;

  constructor(private walletService: WalletService, private route: ActivatedRoute) {
    this.routeSubscriber = this.route.params.subscribe((params) => {
      this.groupBy = params['groupBy'];
      this.sync();
    });
  }

  sync() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      let lastDate = '', tempData;
      this.data = data.filter((coin) => {
        return !coin.income ? coin : false;
      });

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
    this.routeSubscriber && this.routeSubscriber.unsubscribe();
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
