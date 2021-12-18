import { Component, OnInit } from '@angular/core';
import { Comments } from './reducers/Comments';
import { Observable } from 'rxjs';
import { commentsSelector } from './selectors/CommentsSelectors';
import { Store } from '@ngrx/store';
import { commentsState } from './reducers/CommentsReducers';
import { commentsAction } from './action/CommentsAction';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments$ :Observable<Comments[]>;
  constructor(private store: Store<commentsState>){ }

  ngOnInit(): void {
    this.comments$ = this.store.select(commentsSelector);
    this.store.dispatch(commentsAction());
  }

}
