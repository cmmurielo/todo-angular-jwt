import { Component, OnInit } from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from "../models/task.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title = 'todo';
  arrTask: Task[];

  constructor(private tasksService: TasksService, private authService: AuthService) {
    this.arrTask = [];
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.arrTask = [];
    this.tasksService
      .getList()
      .subscribe({
        next: (data: Task[]) => this.arrTask = data,
        error: (error) => console.log(error)
      });
  }

  onTaskCreated($event: Task) {
    this.tasksService.create($event).subscribe({
      next: () => this.ngOnInit(),
      error: (error) => console.log(error)
    });
  }

  onTaskChangeState($event: Task) {
    this.tasksService.update($event).subscribe({
      next: () => this.ngOnInit(),
      error: (error) => console.log(error)
    });
  }

  onTaskDeleted($event: any) {
    this.tasksService.delete($event._id).subscribe({
      next: () => this.ngOnInit(),
      error: (error) => console.log(error)
    });
  }

  logOff(){
    this.authService.logout()
  }
}
