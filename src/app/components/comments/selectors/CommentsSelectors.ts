import { createFeatureSelector, createSelector } from "@ngrx/store";
import { commentsState } from "../reducers/CommentsReducers";

const commentsState = createFeatureSelector<commentsState>('commentsState');

export const commentsSelector = createSelector(
  commentsState,
  state => state.comments
)
