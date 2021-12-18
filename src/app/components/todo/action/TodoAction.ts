import { createAction, props } from "@ngrx/store";

export const TodoAction = createAction('[Counter Component] TodoAction');
export const todoFetched = createAction('[Counter Component] todoFetched', props<{todo: any}>());
export const userError = createAction('[User Component] User Error');
