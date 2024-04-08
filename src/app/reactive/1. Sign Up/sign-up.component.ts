import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
  constructor(public formbuilder: FormBuilder, public router: Router, public userservice: UserServiceService) { }

  public tailwindStyles = 'w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
  public one = this.formbuilder.group({ fname: '', lname: '', em: '', pass: '' })
  public reactivearray: any[] = []
  public message = ''

  submit() {
    console.log(34);
    console.log(this.one);
    console.log(this.one.value['em']);
    console.log(this.one.value['pass']);

    if (this.one.value.fname !== '' && this.one.value.lname != '' && this.one.value.em != '' && this.one.value.pass != '') {
      if (localStorage['reactiveform']) {
        this.reactivearray = JSON.parse(localStorage['reactiveform'])
        console.log(localStorage['reactiveform']);

        let user = this.reactivearray.find((users: any) => users.em === this.one.value.em)
        // console.log(user);

        if (!user) {
          this.reactivearray.push(this.one.value);
          localStorage.setItem('reactiveform', JSON.stringify(this.reactivearray));
          console.log(this.reactivearray);

          this.router.navigate(['reactive/signin']);
        } else {
          this.message = 'Email already exists';
          return;
        }
      }

    } else {
      this.message = 'Please fill in all fields';
      return;
    }

    // this.one.controls['fname'].setValue('')
    // this.one.controls['lname'].setValue('')
    // this.one.controls['em'].setValue('')
    // this.one.controls['pass'].setValue('')
  }
}