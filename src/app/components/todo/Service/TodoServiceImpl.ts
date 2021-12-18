import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../Core/BaseService';
import { Todo } from './Todo';

@Injectable()
export class TodoServiceImpl extends BaseService<Todo, Todo,Todo> {
constructor(private http: HttpClient) {
  super(http);
  console.log('in the todo service impl');
}
}
