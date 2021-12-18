import { createReducer, on } from "@ngrx/store";
import { commentsFetched } from '../action/CommentsAction';
import { Comments } from './Comments';

export interface commentsState {
  comments: Comments[];
}

const intialState: commentsState = {
  comments: []
};

const comtReducer = createReducer(
  intialState,
  on(commentsFetched, (state,action) => {
    console.log('in the Comments Action')
    return {
      ...state,
      comments: action.comments.body
    }
  })
);

export function commentsReducer(state:any, action:any) {
  return comtReducer(state,action);
}
