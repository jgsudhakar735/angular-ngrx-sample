import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TodoEffects } from './components/todo/effects/TodoEffects';
import { todoReducer } from './components/todo/reducers/TodoReducers';
import { TodoServiceImpl } from './components/todo/Service/TodoServiceImpl';
import { commentsReducer } from './components/comments/reducers/CommentsReducers';
import { CommentsEffects } from './components/comments/effects/CommentsEffects';
import { CommentService } from './components/comments/Service/CommentService';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      todoState: todoReducer,
      commentsState: commentsReducer
    }),
    EffectsModule.forRoot([
      TodoEffects,
      CommentsEffects
    ]),
  ],
  providers: [
    TodoServiceImpl,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
