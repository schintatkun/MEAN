import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  City: any;
  tempMax: any;
  tempMin: any;
  humidity: any;
  temp: any;
  weatherCondition:any;
  constructor(
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      console.log("get params: ",params)
    });
    let obs = this._httpService.getWeatherService("chicago");
    obs.subscribe(data=>{
      console.log('API Seattle weather: ', data);
      this.City = data;
      console.log('City: ',this.City);
      this.tempMax = data['main']['temp_max'];
      this.tempMin = data['main']['temp_min'];
      this.temp = data['main']['temp'];
      this.humidity = data['main']['humidity'];
      this.weatherCondition = data['weather'][0]['description'];
    })
  }
}
