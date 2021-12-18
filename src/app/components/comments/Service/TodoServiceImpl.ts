import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src - Copy/app/ngrx/service/Todo';
import { BaseService } from '../../Core/BaseService';

@Injectable()
export class TodoServiceImpl extends BaseService<Todo, Todo,Todo> {
constructor(private http: HttpClient) {
  super(http);
  console.log('in the todo service impl');
}
}
