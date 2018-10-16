import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  tempMax: any;
  tempMin: any;
  humidity: any;
  temp: any;
  weatherCondition:any;
  constructor(
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeather("seattle")
  }

  getWeather(city){
    let obs = this._httpService.getWeatherService(city);
    obs.subscribe(data=>{
      console.log('API weather: ', data);
      this.tempMax = data['main']['temp_max'];
      this.tempMin = data['main']['temp_min'];
      this.temp = data['main']['temp'];
      this.humidity = data['main']['humidity'];
      this.weatherCondition = data['weather'][0]['description'];
    })
  }
  goHome(){
    this._router.navigate(['/']);
  }

}
