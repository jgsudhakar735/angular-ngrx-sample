import { Component } from "@angular/core";
import { BaseService } from "../service/BaseService";

export abstract class BaseComponent<REQ,RES, SER extends BaseService<REQ,RES,RES>> {

  constructor (private baseService: BaseService<REQ,RES,RES>){
    console.log('this is base component')
  }
}
