import { Injectable } from '@angular/core';
import { Task } from './task'
import { RestApiService } from './rest-api.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TaskService {


  constructor(private RestAPIService: RestApiService) { }

  getTasks(): Observable<Task[]> {
    return this.RestAPIService.getTasks();
  }

  onCompletionChange(isChecked: boolean, task: Task) {
    task.completion = isChecked;
    this.RestAPIService.updateTask(task.ID, task).subscribe(t => {task = t});
  }

  getTask(id: number): Observable<Task> {
    return this.getTasks().pipe(map(t => t.find(t => t.ID == id)));
  }

  deleteTask(id : number) {
    this.RestAPIService.deleteTask(id).subscribe(( ) => console.log("Deleted task " + id));
    window.location.reload();
  }

  onDescriptionChange(value: string, task: Task) {
    task.description = value;
    this.RestAPIService.updateTask(task.ID, task).subscribe(t => {task = t});
  }

}
