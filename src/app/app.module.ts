import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {ZonesModule} from './zones/zones.module';
import {AuthModule} from './components/auth/auth.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {WalletModule} from './wallet/wallet.module';
import {OutcomesModule} from './components/outcomes/outcomes.module';
import {IncomesModule} from './components/incomes/incomes.module';
import {PredictionsModule} from './components/predictions/predictions.module';
import {environment} from 'environments/environment';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,

    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),

    WalletModule,

    AuthModule,
    DashboardModule,
    OutcomesModule,
    IncomesModule,
    PredictionsModule,
    ZonesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
