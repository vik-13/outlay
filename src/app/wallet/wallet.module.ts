import {NgModule} from '@angular/core';
import {WalletService} from './wallet.service';

import {AngularFireDatabase} from 'angularfire2/database';

@NgModule({
  providers: [
    WalletService,
    AngularFireDatabase
  ]
})
export class WalletModule {}
