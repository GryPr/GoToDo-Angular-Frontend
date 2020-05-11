import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { RestApiService } from '../rest-api.service'
import { TaskService } from '../task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[];

  constructor(private RestAPIService: RestApiService, public TaskService: TaskService) { }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe(t => {this.tasks = t});
  }

}
