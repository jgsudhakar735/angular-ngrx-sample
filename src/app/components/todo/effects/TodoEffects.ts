import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TodoAction, todoFetched, userError } from "../action/TodoAction";
import { TodoServiceImpl } from "../Service/TodoServiceImpl";

@Injectable({
  providedIn: 'root'
})
export class TodoEffects {

  constructor(private actions$: Actions,
    private todoService: TodoServiceImpl) {}
    todoList$ = createEffect(
      () =>
          this.actions$.pipe(
            ofType(TodoAction),
            switchMap(action => this.todoService.GET('https://jsonplaceholder.typicode.com/todos',null).
            pipe(
              map(todo => {
                return todoFetched({todo});
              }),
              catchError(err => {
                return of(userError);
              })
          )
      ),
      ))
}
