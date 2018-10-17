import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  coinValue: number =1 ;
  TotalCoins: number =0;
  Transctions= [];
  currentTrans:any;
  constructor() { }

  increaseShintoCoinValue(num){
    this.coinValue+=num;
    console.log('-------  Current Coin market value ------- ')
    console.log('Coin Value: ', this.coinValue);
    return this.coinValue;
  }
  decreaseShintoCoinValue(num){
    this.coinValue-=num;
    console.log('-------  Current Coin market value ------- ')
    console.log('Coin Value: ', this.coinValue);
    return this.coinValue;
  }
  AddCoin(coin){
    this.TotalCoins +=coin;
    console.log('------ add coins balance -----');
    console.log('Total Balance = :', this.TotalCoins);
    return this.TotalCoins;
  }
  RemoveCoin(coin){
    this.TotalCoins -= coin;
    console.log('===== sell coin ======');
    console.log('Total Balance = :', this.TotalCoins);
    return this.TotalCoins;
  }

  getCurrentValue(){
    console.log("im at getCurrentvalue", this.coinValue);
    return this.coinValue;
  }
  getBalance(){
    return this.TotalCoins;
  }
  getTransactions(id){
    for(let i=0; i<this.Transctions.length;i++){
      console.log('-----', this.Transctions[i]['id']);
      console.log('-----', id);
      if(this.Transctions[i]['id']== id){
        this.currentTrans = this.Transctions[i];
        return this.currentTrans;
      }
    }
    return "transaction not found";  
  }
  addTransaction(trans){
    return this.Transctions.push(trans);
  }
  generateTran(action,amount,value){
    let randID = Math.floor(Math.random()*9999);
    let newTran = {id:randID, Action: action, Amount: amount, Value: value};
    console.log(newTran);
    return this.addTransaction(newTran);
  }

  getAllTransactions(){
    return this.Transctions;
  }
}
