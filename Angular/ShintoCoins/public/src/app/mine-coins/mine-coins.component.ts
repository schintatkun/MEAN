import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {
  Answer : number = 100
  userInput : number;
  transcaction = { id : 0, type:"Mine", value: 0 , amount : 1 }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  getAnswer(){
    if(this.userInput == this.Answer){
      this.userInput = 0;
      let currentVal = this._httpService.getCurrentValue();
      this._httpService.increaseShintoCoinValue(1);
      this._httpService.AddCoin(1);
      this._httpService.generateTran('Mined',1,currentVal);
    }else{
      console.log('answer is wrong');
    }
  }
}
