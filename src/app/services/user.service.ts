import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpClient) { }

  create(user: User): Observable<User> {
    return this.httpService.post<User>(`${environment.apiUrl}/auth`, user)
  }
}
