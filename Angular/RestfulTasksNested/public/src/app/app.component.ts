import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks=[];
  mytask:any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){

  }
  onbtnShowAll(){
    let obs = this._httpService.getTasks();
    obs.subscribe(data=>{
      this.tasks = data['task'];
    })
  }
  // onbtnShowDesc(id){
  //   console.log('this is task : ',id);
  //   let obs = this._httpService.getOneTask(id);
  //   obs.subscribe(data=>{
  //     console.log("Got a Task from DB serach by ID", data);
  //     this.mytask = data['task'];
  //   })
  // }

  onbtnShowDesc(task){this.mytask = task;
  }
  

}
