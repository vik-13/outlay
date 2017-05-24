import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignInComponent {

  constructor(private af: AngularFireAuth) {}

  submit(form) {
    this.af.auth.signInWithEmailAndPassword(form.value.email, form.value.password).catch((response) => {
      console.log(response.message);
    });
  }
}
