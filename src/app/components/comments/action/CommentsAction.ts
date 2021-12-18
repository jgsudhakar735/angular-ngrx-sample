import { createAction, props } from "@ngrx/store";

export const commentsAction = createAction('[Counter Component] commentsAction');
export const commentsFetched = createAction('[Counter Component] commentsFetched', props<{comments: any}>());
