import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BaseEffects } from '../../../ngrx/effects/BaseEffects';
import { TodoModel, TodoModelList } from './TodoModel';
import { TodoService } from '../Service/TodoService';
import { MODULES } from 'src/app/ngrx/modules/Modules';

@Injectable()
export class TodoEffects extends BaseEffects<TodoModel,TodoModelList> {

  public constructor (private action: Actions, private service: TodoService) {
    super(MODULES.TODO,action,service);
  }
}
