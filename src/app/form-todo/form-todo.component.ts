import { AuthService } from './../services/auth.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../models/task.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {

  @Output() taskCreated: EventEmitter<Task>;

  nTask: Task;
  formTask: FormGroup;

  constructor(private authService:AuthService) {
    this.nTask = new Task('', '');
    this.taskCreated = new EventEmitter();
    this.formTask = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.nTask = new Task(this.formTask.value.title, this.authService.userLogged);
    this.taskCreated.emit(this.nTask);
    this.formTask.reset();
  }

}
