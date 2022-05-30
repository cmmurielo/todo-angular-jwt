import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Task } from '../models/task.model';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient, private authService:AuthService) { }

  getList(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${environment.apiUrl}/tasks/${this.authService.getCurrentUser()}`);
  }

  create(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${environment.apiUrl}/task/`, task);
  }

  update(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${environment.apiUrl}/task/${task._id}`, task);
  }

  delete(id: string): Observable<unknown> {
    return this.httpClient.delete(`${environment.apiUrl}/task/${id}`);
  }
}
