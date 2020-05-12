import { Component, OnInit } from '@angular/core';
import { TaskCreation } from '../task'
import { TaskService } from '../task.service'
import { FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


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

  taskForm;

  constructor(
    public TaskService: TaskService,
    private FormBuilder: FormBuilder,
    private snackbar: MatSnackBar,
  ) { 
    this.taskForm = this.FormBuilder.group({
      description: '',
    })
  }

  ngOnInit(): void {
  }

  onSubmit(taskData) {
    this.task.description = taskData.description;
    this.TaskService.newTask(this.task);
    this.taskForm.reset();
    this.openSnackbar(this.task.description);
  }

  openSnackbar(desc){
    this.snackbar.open("Added task: " + desc, "Close", {duration: 5000})
  }

}