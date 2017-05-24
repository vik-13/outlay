import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class WalletService {
  ownerId: string;
  walletObservable: FirebaseListObservable<any>;
  walletSubscriber: any;

  wallet: BehaviorSubject<any>;

  constructor(private db: AngularFireDatabase) {
    this.wallet = new BehaviorSubject([]);
  }

  setOwnerId(id) {
    this.ownerId = id;
    this.subscribe();
  }

  getOwnerId() {
    return this.ownerId;
  }

  cleanOwnerId() {
    this.unsubscribe();
  }

  add(coin) {
    return this.walletObservable.push(coin);
  }

  update(key, coin) {
    return this.walletObservable.update(key, coin);
  }

  remove(key) {
    return this.walletObservable.remove(key);
  }

  subscribe() {
    console.log(this.ownerId);
    this.walletObservable = this.db.list('/users/' + this.ownerId + '/wallet', {
      query: {
        orderByChild: 'created'
      }
    });
    this.walletSubscriber = this.walletObservable.subscribe((snapshot) => {
      this.wallet.next(snapshot);
    });
  }

  unsubscribe() {
    if (this.walletSubscriber) {
      this.walletSubscriber.unsubscribe();
    }
  }
}
