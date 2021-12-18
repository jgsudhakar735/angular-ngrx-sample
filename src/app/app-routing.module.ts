import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { CommentsComponent } from './components/comments/comments.component';

export const routes: Routes = [

	{ path: 'todo', component: TodoComponent },
	{ path: 'todo/:id', component: TodoComponent },
	{ path: 'comments', component: CommentsComponent },
	{ path: 'comments/:id', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
