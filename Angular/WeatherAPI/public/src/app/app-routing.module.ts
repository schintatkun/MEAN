import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {path : 'seattle', component: SeattleComponent},
  {path : 'sanjose', component: SanjoseComponent},
  {path : 'burbank', component: BurbankComponent},
  {path : 'dallas', component: DallasComponent},
  {path : 'washingtondc', component: WashingtondcComponent},
  {path : 'chicago', component: ChicagoComponent},
  {path : '', pathMatch: 'full', redirectTo: '/seattle'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
