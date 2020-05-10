import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RestApiService } from '../rest-api.service'

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
