import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getTasks(){
    return this._http.get('/tasks');
  }
  addTask(newTask){
    return this._http.post('/tasks', newTask);
  }
  updateTask(task){
    return this._http.put('/tasks/'+task._id, task);
  }
  deleteTask(id){
    console.log('arrived to deletetask service',id);
    return this._http.delete('/tasks/'+id);
  }
  getOneTask(id){
    console.log('get a task by ID', id);
    return this._http.get('/tasks/'+id);
  }
}
