import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors');
  }
  createAuthor(name){
    return this._http.post('/authors',name);
  }
  getAuthor(id){
    return this._http.get('/authors/'+id);
  }
  createQuote(quote){
    return this._http.post('/quotes', quote);
  }
  deleteQuote(id){
    return this._http.delete('/quotes/'+id);
  }
  castVote(num,quote_id){
    return this._http.patch('/quotes/'+quote_id, {votes:num})
  }
  updateAuthor(author){
    return this._http.put('/authors/'+author._id, author)
  }
}
