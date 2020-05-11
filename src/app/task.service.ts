import { Injectable } from '@angular/core';
import { Task } from './task'
import { RestApiService } from './rest-api.service'
import { Observable } from 'rxjs';

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
    console.log(task.completion);
    this.RestAPIService.updateTask(task.ID, task).subscribe(t => {task = t});
  }

}
