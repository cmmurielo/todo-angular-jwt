import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  formUser: FormGroup

  constructor(private userService:UserService, private router:Router) {
    this.formUser = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    })
  }

  ngOnInit(): void {
  }

  save(){
    this.userService.create(this.formUser.value).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error)      
    });
    this.router.navigate(['login'])
  }

}
