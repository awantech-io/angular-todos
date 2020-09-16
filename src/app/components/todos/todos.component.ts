import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id:1,
        title: 'task one',
        completed: true
      },
      {
        id:2,
        title: 'task two',
        completed: true
      },
      {
        id:1,
        title: 'task three',
        completed: false
      }
    ]
  }

}
