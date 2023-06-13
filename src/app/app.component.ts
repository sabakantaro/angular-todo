import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [
    { title: 'workout', done: false },
    { title: 'job hunting', done: true },
    { title: 'studying English', done: false },
  ];
  newTaskTitle = '';
  addTask() {
    this.tasks.push({ title: this.newTaskTitle, done: false });
    this.newTaskTitle = '';
  }
}
