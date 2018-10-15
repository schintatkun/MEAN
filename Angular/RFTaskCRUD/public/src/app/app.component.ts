import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks = [];
  mytask: any;
  newTask: any;
  selectedTask: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = {title:"", description:""};
  }

  onbtnShowAll(){
    let obs = this._httpService.getTasks();
    obs.subscribe(data=>{
      this.tasks = data['task'];
    })
  }
  onbtnShowDesc(id){
      console.log('this is task : ',id);
      let obs = this._httpService.getOneTask(id);
      obs.subscribe(data=>{
        console.log("Got a Task from DB serach by ID", data);
        this.mytask = data['task'];
      })
    }
  
  onSubmit(){
    console.log('click submit')
    let obs = this._httpService.addTask(this.newTask);
    obs.subscribe(data=> {
      console.log("Got data from post back", data);
      //after adding new task, then clear newTask
      this.newTask = {title:'', description:''};
    })
  }
  //click then show edit section
  onbtnEdit(task){
    this.selectedTask = task;
  }
  //submit changes to DB
  onbtnUpdate(task){
    let obs = this._httpService.updateTask(task);
    obs.subscribe(data=>{
      console.log("Got response data from edit ", data);
      this.selectedTask = {title: "", description:""};
    })
    //execute method in order to get all updated tasks display on screen
    this.onbtnShowAll();
  }

  //Delete task by id
  onbtnDelete(id){
    console.log('clicke delete button');
    let obs = this._httpService.deleteTask(id);
    obs.subscribe(data=>{
      console.log("Got del response from DB", data);
    })
    this.onbtnShowAll();
  }
}
