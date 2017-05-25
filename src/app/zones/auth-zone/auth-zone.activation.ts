import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';
import {WalletService} from '../../wallet/wallet.service';

@Injectable()
export class AuthZoneActivation implements CanActivate{
  isAuthorized: Observable<boolean>;
  authSubscriber: any;

  constructor(private af: AngularFireAuth, private router: Router, private wallet: WalletService) {
    this.isAuthorized = new Observable((observer) => {
      this.authSubscriber = this.af.authState.subscribe((auth) => {
        if (auth) {
          this.router.navigate(['/dashboard']);
          this.authSubscriber.unsubscribe();
        } else {
          this.wallet.setOwnerId('');
        }
        observer.next(!auth);
      });
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthorized;
  }
}
