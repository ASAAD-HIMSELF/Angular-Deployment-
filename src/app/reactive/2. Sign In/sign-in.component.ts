import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {
  constructor(public router: Router) { }

  public em = ''
  public pass = ''
  public userarray: any = []
  public message = ''

  ngOnInit() {
    if (localStorage['reactiveform']) {
      this.userarray = JSON.parse(localStorage['reactiveform'])
      console.log(this.userarray);
    }
  }

  signIn() {
    let user = this.userarray.find((user: any) => user.em === this.em && user.pass === this.pass)
    console.log(user);

    if (!user) {
      this.message = 'User Not Found'
    } else {
      this.router.navigate([`reactive/dashboard/${user.fname}`]);
    }
  }
}