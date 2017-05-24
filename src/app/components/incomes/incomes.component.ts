import {Component} from "@angular/core";
import {WalletService} from "../../wallet/wallet.service";

@Component({
  selector: 'incomes',
  templateUrl: './incomes.html',
  styleUrls: ['./incomes.scss']
})
export class IncomesComponent {
  data: any;

  walletSubscriber: any;

  constructor(private walletService: WalletService) {
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      this.data = data.filter((coin) => {
        return coin.income ? coin : false;
      });
      console.log('incomes', this.data);
    });
  }

  ngOnDestroy() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
