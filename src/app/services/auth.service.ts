import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router:Router) {
  }

  login(username: string, password:string) {
    return this.httpClient.post(`${environment.apiUrl}/login`, {username:username, password:password}, {responseType:'json'}).subscribe({
      next: (data : any) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.router.navigate(['todo'])
      },
      error: (error) => console.log(error)
    })
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['login'])
  }

  getCurrentUser() {
    let userId: any = localStorage.getItem('userId')
    if (userId) {
      return userId
    } else {
      this.logout()
    }
  }

}
