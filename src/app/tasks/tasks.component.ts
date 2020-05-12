import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { RestApiService } from '../rest-api.service'
import { TaskService } from '../task.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[];

  constructor(
    private RestAPIService: RestApiService, 
    private TaskService: TaskService,
    private snackbar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe(t => {this.tasks = t});
  }

  changeCompletion(change: boolean, t: Task){
    this.TaskService.onCompletionChange(change, t);
    if (change == true) {
      this.openSnackbar("Completed task: " + t.description)
    }
    else {
      this.openSnackbar("Removed completion of task: " + t.description) 
    }
  }

  delete(id: number){
    this.TaskService.deleteTask(id);
    this.openSnackbar("Deleted task with ID: " + id);
  }

  openSnackbar(desc){
    this.snackbar.open(desc, "Close", {duration: 5000});
  }

}
