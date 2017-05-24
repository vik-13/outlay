import {NgModule} from '@angular/core';
import {AuthZoneComponent} from './auth-zone/auth-zone.component';
import {InternalZoneComponent} from './internal-zone/internal-zone.component';
import {AuthZoneActivation} from './auth-zone/auth-zone.activation';
import {InternalZoneActivation} from './internal-zone/internal-zone.activation';
import {RouterModule} from '@angular/router';
import {
  MdToolbarModule, MdSidenavModule, MdListModule, MdInputModule, MdSelectModule,
  MdButtonModule, MdMenuModule, MdIconModule
} from '@angular/material';
import {AddCoinModule} from '../shared/add-coin/add-coin.module';

import {AngularFireAuth} from 'angularfire2/auth';

@NgModule({
  imports: [
    RouterModule,

    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,

    AddCoinModule
  ],
  declarations: [
    AuthZoneComponent,
    InternalZoneComponent,
  ],
  providers: [
    AuthZoneActivation,
    InternalZoneActivation,
    AngularFireAuth
  ]
})
export class ZonesModule {}
