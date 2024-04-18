import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyApiCalssService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
