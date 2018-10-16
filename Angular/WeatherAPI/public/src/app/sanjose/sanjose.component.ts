import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  tempMax: any;
  tempMin: any;
  humidity: any;
  temp: any;
  weatherCondition:any;
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeather("San Jose")
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
}
