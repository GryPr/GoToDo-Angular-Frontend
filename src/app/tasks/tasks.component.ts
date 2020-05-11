import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TaskOptionBarComponent } from '../task-option-bar/task-option-bar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RestApiService } from '../rest-api.service'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[];

  constructor(private RestAPIService: RestApiService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  onChange(id: number, isChecked: boolean) {
    var currentTask : Task = this.tasks.find(x => x.ID == id);
    currentTask.completion = isChecked;
    console.log(currentTask.completion);
    this.RestAPIService.updateTask(id, currentTask).subscribe(t => {currentTask = t});
    
  }

  getTasks(): void {
    this.RestAPIService.getTasks().subscribe(t => {this.tasks = t});
  }
}
