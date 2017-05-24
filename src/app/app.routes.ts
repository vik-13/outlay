import {Routes} from "@angular/router";
import {AuthZoneComponent} from "./zones/auth-zone/auth-zone.component";
import {AuthZoneActivation} from "./zones/auth-zone/auth-zone.activation";
import {SignInComponent} from "./components/auth/sign-in/sign-in.component";
import {SignUpComponent} from "./components/auth/sign-up/sign-up.component";
import {InternalZoneComponent} from "./zones/internal-zone/internal-zone.component";
import {InternalZoneActivation} from "./zones/internal-zone/internal-zone.activation";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {OutcomesComponent} from "./components/outcomes/outcomes.component";
import {IncomesComponent} from "./components/incomes/incomes.component";
import {PredictionsComponent} from "./components/predictions/predictions.component";
import {DayComponent} from "./components/outcomes/day/day.component";
import {MonthComponent} from "./components/outcomes/month/month.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: AuthZoneComponent,
    canActivate: [AuthZoneActivation],
    children: [
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
    ]
  },
  {
    path: '',
    component: InternalZoneComponent,
    canActivate: [InternalZoneActivation],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'outcomes/day', component: DayComponent},
      {path: 'outcomes/month', component: MonthComponent},
      {path: 'incomes', component: IncomesComponent},
      {path: 'predictions', component: PredictionsComponent}
    ]
  },
  {path: '**', redirectTo:'/dashboard'}
];
