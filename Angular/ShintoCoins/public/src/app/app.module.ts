import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { LedgerComponent } from './ledger/ledger.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule} from '@angular/forms';
import { HttpService } from './http.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyCoinsComponent,
    SellCoinsComponent,
    MineCoinsComponent,
    LedgerComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
