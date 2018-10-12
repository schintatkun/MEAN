import { Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks = [];
  task2nd = {};
  constructor(private _httpService: HttpService) {}
  
  ngOnInit(){
  this.getTasksFromService();
  this.getsecondTaskFromService();
  }

  getTasksFromService(){
    let obs = this._httpService.getTasks();
    obs.subscribe(data=>{
      console.log("Got our tasks",data)
      this.tasks = data['task'];
      console.log(this.tasks);
  });}

  getsecondTaskFromService(){
    let obs = this._httpService.getTasks();
    obs.subscribe(data=>{
      this.task2nd = data['task'][1];
    })
  }

}

