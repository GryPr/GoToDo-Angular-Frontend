import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TASKS } from '../test-tasks'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(id: number, isChecked: boolean) {
    this.tasks.find(x => x.id == id).completion = isChecked;
  }
}
