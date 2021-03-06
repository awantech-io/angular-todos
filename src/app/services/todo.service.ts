import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string='https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor( private http:HttpClient) { }

  // make request to jsonplaceholder api
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

  }

  // toogle completed
  toogleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/$todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }


}
