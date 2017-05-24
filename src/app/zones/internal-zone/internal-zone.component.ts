import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-internal-zone',
  templateUrl: './internal-zone.html',
  styleUrls: ['./internal-zone.scss']
})
export class InternalZoneComponent {

  constructor(private af: AngularFireAuth) {}

  signOut() {
    this.af.auth.signOut().catch((response) => {
      console.log('Logout message:', response);
    });
  }
}
