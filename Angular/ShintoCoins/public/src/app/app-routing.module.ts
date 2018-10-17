import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { LedgerComponent } from './ledger/ledger.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'minecoins', component: MineCoinsComponent},
  {path: 'buycoins', component:BuyCoinsComponent},
  {path: 'sellcoins', component: SellCoinsComponent},
  {path: 'ledger', component: LedgerComponent},
  {path: 'transaction/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
