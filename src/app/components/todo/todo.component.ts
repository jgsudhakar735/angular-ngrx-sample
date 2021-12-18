import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoAction } from './action/TodoAction';
import { TodoReducersState } from './reducers/TodoReducers';
import { Store } from '@ngrx/store';
import { todoSelector } from './selectors/TodoSelectors';
import { Todo } from './Service/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private store: Store<TodoReducersState>){ }

  todo$: Observable<Todo[]>;

  ngOnInit(): void {
    this.store.dispatch(TodoAction());
    this.todo$ = this.store.select(todoSelector);
  }

}
