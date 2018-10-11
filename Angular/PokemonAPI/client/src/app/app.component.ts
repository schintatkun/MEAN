import { Component } from '@angular/core';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  constructor(private _httpService: HttpService){}
}
