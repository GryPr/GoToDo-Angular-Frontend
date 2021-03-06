import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task, TaskCreation } from './task';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL + '/todo')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createTask(task): Observable<TaskCreation> {
    return this.http.post<TaskCreation>(this.apiURL + '/todo', JSON.stringify(task), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateTask(id, task): Observable<any> {
    return this.http.put(this.apiURL + '/todo/' + id, task, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteTask(id){
    return this.http.delete(this.apiURL + '/todo/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage)
    console.log(errorMessage)
    return throwError(errorMessage)
    }
}