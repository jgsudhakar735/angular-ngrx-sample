import { IEntity, IList } from '../../../ngrx/actions/BaseModule';
export interface TodoModel extends IEntity {
  id: string,
  userId: string,
  title: string,
  completed: string
}

export interface TodoModelList extends IList<TodoModel>{}
