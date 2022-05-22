import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../models/task.model";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  @Output() taskDeleted: EventEmitter<Task>;
  @Output() taskChangeState: EventEmitter<Task>;
  @Input() tasks: Task[];

  constructor() {
    this.tasks = [];
    this.taskDeleted = new EventEmitter();
    this.taskChangeState = new EventEmitter();
  }

  ngOnInit(): void {
  }

  doneTask(task: Task) {
    if (task.state !== 3) {
      task.state = task.state == 1 ? 0 : 1;
      this.taskChangeState.emit(task);
    }
  }

  cancelTask(task: Task) {
    if (task.state !== 0) {
      task.state = task.state == 3 ? 1 : 3;
      this.taskChangeState.emit(task);
    }
  }

  deleteTask(task: Task) {
    this.taskDeleted.emit(task);
  }
}
