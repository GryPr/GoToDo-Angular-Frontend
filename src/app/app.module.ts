import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule }    from '@angular/common/http';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material UI
import { TaskOptionBarComponent } from './task-option-bar/task-option-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
// Authentication
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component'
import { OAuthModule } from 'angular-oauth2-oidc'

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskCreateComponent,
    TaskEditComponent,
    DashboardComponent,
    TaskOptionBarComponent,
    LoginPageComponent,
    SignupPageComponent
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
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    OAuthModule.forRoot({
      resourceServer:
      {
        allowedUrls: ['http://localhost:8000'],
        sendAccessToken: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
