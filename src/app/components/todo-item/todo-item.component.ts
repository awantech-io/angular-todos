import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  
  constructor( private todoService:TodoService ) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete' : this.todo.completed
    }

    return classes;
  }

  // on toggle
  onToggle(todo) {
    // Toogle in UI
    todo.completed = !todo.completed;
    // Toogle on sever
    this.todoService.toogleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    console.log('Delete');
  }

}
