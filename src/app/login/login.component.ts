import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;

  constructor(private authService:AuthService) {

    this.formLogin = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.authService.login(this.formLogin.value.username, this.formLogin.value.password)
  }


}
