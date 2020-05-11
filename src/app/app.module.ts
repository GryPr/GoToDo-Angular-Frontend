import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule }    from '@angular/common/http';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TaskOptionBarComponent } from './task-option-bar/task-option-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskCreateComponent,
    TaskEditComponent,
    DashboardComponent,
    TaskOptionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatCheckboxModule,
    MatSliderModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
