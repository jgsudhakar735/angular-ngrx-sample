import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../Core/BaseService';
import { Comments } from '../reducers/Comments';

@Injectable()
export class CommentService extends BaseService<Comments,Comments,Comments> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
}
