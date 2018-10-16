import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-washingtondc',
  templateUrl: './washingtondc.component.html',
  styleUrls: ['./washingtondc.component.css']
})
export class WashingtondcComponent implements OnInit {
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
    this.getWeather("washington DC.");
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
    });
  }
}

