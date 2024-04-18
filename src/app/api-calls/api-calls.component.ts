import { Component } from '@angular/core';
import { MyApiCalssService } from '../services/my-api-calss.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-calls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-calls.component.html',
  styleUrl: './api-calls.component.css'
})
export class ApiCallsComponent {
  constructor(public Api: MyApiCalssService) { }

  public usersArray: any;
  public photosArray: any;
  public todosArray: any;

  ngOnInit() {
    this.Api.getUsers().subscribe((users) => {
      console.log(users);
      this.usersArray = users;
    })

    this.Api.getPhotos().subscribe((photos) => {
      console.log(photos);
      this.photosArray = photos;
    })

    this.Api.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todosArray = todos;
    })
  }

  changeStatus(todo: any) {
    todo.completed = !todo.completed;
  }
} 