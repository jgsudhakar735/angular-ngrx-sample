import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoReducersState } from "../reducers/TodoReducers";

const todoState = createFeatureSelector<TodoReducersState>('todoState');

export const todoSelector = createSelector(
  todoState,
  state => state.todo
)
