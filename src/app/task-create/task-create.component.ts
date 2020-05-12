import { Component, OnInit } from '@angular/core';
import { TaskCreation } from '../task'
import { TaskService } from '../task.service'

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task : TaskCreation = {
    description: "",
    completion: false,
  }

  constructor(
    public TaskService: TaskService,
  ) { }

  ngOnInit(): void {
  }

}
