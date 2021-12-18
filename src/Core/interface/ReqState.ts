import { HttpErrorResponse } from "@angular/common/http";
import { ResponseIFace } from "./ResponseIFace";

export interface ReqState<T> {
  isLoading: boolean;
	data: T[];
	list: ResponseIFace<T>;
	error: HttpErrorResponse;
	success: string;
}
