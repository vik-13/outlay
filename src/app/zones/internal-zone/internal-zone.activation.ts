import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';
import {WalletService} from '../../wallet/wallet.service';

@Injectable()
export class InternalZoneActivation implements CanActivate{
  isAuthorized: Observable<boolean>;
  authSubscriber: any;

  constructor(private af: AngularFireAuth, private router: Router, private wallet: WalletService) {
    console.log('test');
    this.isAuthorized = new Observable((observer) => {
      console.log('test');
      this.authSubscriber = this.af.authState.subscribe((auth) => {
        console.log(auth);
        if (!auth) {
          this.router.navigate(['/sign-in']);
          this.authSubscriber.unsubscribe();
        } else {
          this.wallet.setOwnerId(auth.uid);
        }
        observer.next(!!auth);
      });
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthorized;
  }
}
