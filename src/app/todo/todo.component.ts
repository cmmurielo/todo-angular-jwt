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
      .subscribe((data: Task[]) => (this.arrTask = data));
  }

  onTaskCreated($event: Task) {
    this.tasksService.create($event).subscribe(() => {
      this.ngOnInit();
    });
  }

  onTaskChangeState($event: Task) {
    this.tasksService.update($event).subscribe(() => {
      this.ngOnInit();
    });
  }

  onTaskDeleted($event: any) {
    this.tasksService.delete($event._id).subscribe(() => {
      this.ngOnInit();
    });
  }

  logOff(){
    this.authService.logout()
  }
}
