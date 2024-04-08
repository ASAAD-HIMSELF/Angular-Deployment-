import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() { }

  public getuser() {
    return JSON.parse(localStorage['reactiveform'])
  }
}