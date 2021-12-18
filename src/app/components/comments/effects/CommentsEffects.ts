import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { userError } from "../../todo/action/TodoAction";
import { commentsAction, commentsFetched } from "../action/CommentsAction";
import { CommentService } from "../Service/CommentService";

@Injectable({
  providedIn: 'root'
})
export class CommentsEffects {

  constructor(private actions$: Actions,
    private commentService: CommentService) {}
    commentsList$ = createEffect(
      () =>
          this.actions$.pipe(
            ofType(commentsAction),
            switchMap(action => this.commentService.GET('https://jsonplaceholder.typicode.com/comments',null).
            pipe(
              map(comments => {
                return commentsFetched({comments});
              }),
              catchError(err => {
                return of(userError);
              })
          )
      ),
      ))
}
