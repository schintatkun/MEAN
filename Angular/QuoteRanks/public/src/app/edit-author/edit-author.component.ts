import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { _getComponentHostLElementNode, resolveDirective } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author: any;
  error: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      let obs = this._httpService.getAuthor(params['author_id'])
      obs.subscribe(data=>{
        this.author = data;
      })
    })
  }
  update(){
    let obs =this._httpService.updateAuthor(this.author);
    obs.subscribe(data=>{
      if('errors' in data){
        this.error = data['message'];
        console.log('xxxxx ',this.error);
        //remove some unwanted error message
        this.error = this.error.substring(25);
      }else{
        this.redirectHome();
      }
    })
  }
  redirectHome(){
    this._router.navigate(['/home']);
  }
}
