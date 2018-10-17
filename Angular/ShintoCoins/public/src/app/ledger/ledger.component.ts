import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  Transactions: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
   this.Transactions = this._httpService.getAllTransactions();
   console.log("get transaction ledger ",this.Transactions);
  }

}
