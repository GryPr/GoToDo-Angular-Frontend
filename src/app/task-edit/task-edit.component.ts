import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task.service'
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task: Task;

  constructor( 
    private route: ActivatedRoute,
    public TaskService: TaskService,
    ) { }

  ngOnInit(): void {
    this.TaskService.getTask(+this.route.snapshot.paramMap.get('id')).subscribe(t => {this.task = t})
  }
}