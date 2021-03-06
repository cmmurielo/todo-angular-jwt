import { FormUserComponent } from './form-user/form-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form-user', component: FormUserComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
