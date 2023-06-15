import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();

  newTask = {
    title: '',
    deadline: null,
  };

  submit(): void {
    this.addTask.emit({ title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline!) });
    this.newTask = {
      title: '',
      deadline: null,
    };
  }
}
