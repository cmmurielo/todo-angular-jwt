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
    return this.httpClient.post(`${environment.apiUrl}/login`, {username:username, password:password}, {responseType:'text'}).subscribe((resp: any) => {
      localStorage.setItem('token', resp);
      this.router.navigate(['todo'])
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
