import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Task } from '../models/task.model';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + this.authService.token,
  //   })
  // }

  constructor(private httpClient: HttpClient, private authService:AuthService) { }

  getList(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(environment.apiUrl);
  }

  create(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(environment.apiUrl, task);
  }

  update(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${environment.apiUrl}/${task._id}`, task);
  }

  delete(id: string): Observable<unknown> {
    return this.httpClient.delete(`${environment.apiUrl}/${id}`);
  }
}
