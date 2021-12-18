import { BaseService } from "src/app/ngrx/service/BaseService";
import { HttpClient } from '@angular/common/http';
import { MODULES } from "src/app/ngrx/modules/Modules";
import { TodoModel } from "../ngrxfiles/TodoModel";

export class TodoService extends BaseService<TodoModel> {
  constructor(private httpClient: HttpClient) {
    super(MODULES.TODO.toString(),httpClient);
  }
}
