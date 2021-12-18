import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Response } from './Response';
export abstract class BaseService<REQ, RES, T> {

  public headers = new HttpHeaders().
        set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  POST(url: string, data: REQ): Observable<Response> {
    console.log(' MAKING POST CALL TO SERVER ');
      return  this._http.post<RES>(url,data,{observe:'response'}).pipe(map(res => {
        return new Response(res.body, res.headers,res.status,res.statusText);
      }));
  }

  PUT(url: string, data: REQ): Observable<Response> {
    console.log(' MAKING PUT CALL TO SERVER ');
    return  this._http.post<RES>(url,data,{observe:'response'}).pipe(map(res => {
      return new Response(res.body, res.headers,res.status,res.statusText);
    }));
  }

  DELETE(url: string, id: number): Observable<Response> {
    console.log(' MAKING DELETE CALL TO SERVER ');
      return  this._http.delete(url,{observe:'response'}).pipe(map(response => {
         return new Response(response.body, response.headers,response.status,response.statusText);
       }));
  }

  GET(url: string, data: any): Observable<Response> {
    console.log(' MAKING GET CALL TO SERVER ');
     return this._http.get<RES>(url,{observe:'response'}).pipe(map(res => {
        return new Response(res.body, res.headers,res.status,res.statusText);
      }));
  }

}
