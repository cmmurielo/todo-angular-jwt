import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//Localizacion
import localEsCo from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './todo/todo.component';
import { FormTodoComponent } from './form-todo/form-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import {AuthInterceptor} from "./auth.interceptor";
import { FormUserComponent } from './form-user/form-user.component';
registerLocaleData(localEsCo);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    FormTodoComponent,
    ListTodoComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO',

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
