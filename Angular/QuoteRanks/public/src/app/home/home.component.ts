import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listofAuthors:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors(){
    let obs = this._httpService.getAuthors();
    obs.subscribe(data=>{
      console.log('get authors from DB',data);
      this.listofAuthors = data;
      // console.log(this.listofAuthors)
    })
  }
}
