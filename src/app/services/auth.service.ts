import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged: string

  constructor(private httpClient: HttpClient, private router:Router) {
    this.userLogged = ""
  }

  login(username: string, password:string) {
    return this.httpClient.post(`${environment.apiUrl}/login`, {username:username, password:password}, {responseType:'json'}).subscribe({
      next: (data : any) => {
        localStorage.setItem('token', data.token);
      this.userLogged = data.userId
      this.router.navigate(['todo'])
      },
      error: (error) => console.log(error)
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
