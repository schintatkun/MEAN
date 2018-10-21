import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  author: any;
  error: String ="";
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.resetPage();
  }
  resetPage(){
    this.author ={name: ""};
    this.error = "";
  }
  goHome(){
    this._router.navigate(['/']);
  }
  createAuthor(){
    let obs = this._httpService.createAuthor(this.author);
    obs.subscribe(data=>{
      console.log('Just create an Author', data);
      if("errors" in data){
        this.error = data["message"];
      }else{
        this.resetPage();
        this.goHome();
      }
    })
  }

}
