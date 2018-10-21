import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  error: String="";
  quote: any;
  author_id: String;
  author: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.resetPage();
    //at page load, get author 
    this._route.params.subscribe((params:Params)=>{
      this.author_id = params['author_id'];
      let obs = this._httpService.getAuthor(this.author_id);
      obs.subscribe(data=>{
        console.log('get Author by ID from DB', data);
        this.author = data;
      })
    });
  }
  
  resetPage(){
    this.quote ={ quote:""};
    this.error = "";
  }
  goHome(){
    this._router.navigate(['/home']);
  }

  createQuote(){
    this.quote['author_id'] = this.author_id;
    let obs = this._httpService.createQuote(this.quote);
    obs.subscribe(data=>{
      if('errors' in data){
        this.error = data['message'];
      }else{
        let gotoLink = "/quotes/"+this.author_id;
        this._router.navigate([gotoLink]); 
      }
    })
  }


}
