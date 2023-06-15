import { Component } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [
    { title: 'workout', done: false, deadline: new Date('2021-01-01') },
    { title: 'job hunting', done: true, deadline: new Date('2021-01-01') },
    { title: 'studying English', done: false, deadline: new Date('2021-01-01') },
  ];
  newTask = {
    title: '',
    deadline: new Date()
  };
  addTask(task: Task) {
    this.tasks.push(task)
  };
}
