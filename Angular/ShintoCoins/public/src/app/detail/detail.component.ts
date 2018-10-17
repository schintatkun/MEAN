import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  findTransaction: any;
  constructor(private _route: ActivatedRoute,
      private _httpService: HttpService
    ) { }

  ngOnInit() {
    this.getDetail();
  }
  getDetail(){
    this._route.params.subscribe((params: Params) => {
      let myID = params['id'];
      console.log("show params id ",myID);
      this.findTransaction = this._httpService.getTransactions(myID);
      console.log('show find detail', this.findTransaction);
  });
  }
}
