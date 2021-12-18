import { createReducer, on } from "@ngrx/store";
import { todoFetched } from "../action/TodoAction";
import { Todo } from "../Service/Todo";

export interface TodoReducersState {
  todo: Todo[];
}

const intialState: TodoReducersState = {
  todo: []
};

const _counterReducer = createReducer(
  intialState,
  on(todoFetched, (state,action) => {
    console.log('in the Todo Action')
    return {
      ...state,
      todo: action.todo.body
    }
  })
);

export function todoReducer(state:any, action:any) {
  return _counterReducer(state,action);
}
