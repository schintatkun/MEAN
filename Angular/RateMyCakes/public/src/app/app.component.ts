import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rate my cakes';
  newCake = {name: '', image: ''};
  comment = {rating: '', content: ''};
  cakes = [];
  myCake = {};
  imgClick = false;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getAllCake();
    this.comment = {rating: '', content: ''};
  }
  createCake(){
    let cake = this._httpService.newCake(this.newCake);
    cake.subscribe(data=>{
      console.log('create cake sucess ', data);
      this.newCake = {name: '', image: ''};
      this.getAllCake();
    })
  }
  getAllCake(){
    let cake = this._httpService.getCakes();
    cake.subscribe(data=>{
      console.log("get all cakes", data);
      this.cakes = data['cakes'];
      console.log("cakes : ", this.cakes);
    })
  }
  createComment(id){
    // console.log('id : ',id, 'comment', this.comment);
    let obs = this._httpService.newComment(id, this.comment);
    obs.subscribe(data=>{
      console.log("Create comment ", data);
      this.comment = {rating:'', content:''};
    })
  }
  getOneCake(id){
    let obs = this._httpService.findOneCake(id);
    obs.subscribe(data=>{
      console.log("received a cake that I look for ", data);
      this.myCake = data;
      this.imgClick =true;
    })
  }
}
