import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  getWeatherService(name){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+name+"&units=imperial&appid=b913e1d2697f85dea1f1bd5adf0a07da");
  }
}
