import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: any;
  author_id: String;
  constructor(private _httpService: HttpService, private _route:ActivatedRoute) { }

  ngOnInit() {
    //get author id from URL
    this._route.params.subscribe((params: Params)=> {
      this.author_id = (params['author_id']);
      this.updateAuthor();
    })
  }
  //delete a quote by ID 
  deleteQuote(id){
    let obs = this._httpService.deleteQuote(id);
    obs.subscribe(data=>{
      //after deleted a quote, let update current author to see how many quotes left
      this.updateAuthor();
    })
  }

  // get a single author search by ID
  updateAuthor(){
    let obs = this._httpService.getAuthor(this.author_id);
    obs.subscribe(data=>{
      this.author = data;
    })
  }

  Vote(num, quote_id){
    let obs = this._httpService.castVote(num, quote_id);
    obs.subscribe(data=>{
      this.updateAuthor();
    })
  }

}
