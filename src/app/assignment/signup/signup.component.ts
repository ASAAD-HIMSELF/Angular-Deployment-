import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from '../../services/contact-service.service';

interface ContactInterface {
  fullName: string,
  email: string,
  address: string,
  mobile: string
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public rout: Router, public contactserv: ContactServiceService) { }

  public fullName = ''
  public email = ''
  public address = ''
  public mobile = ''
  public contactarray: ContactInterface[] = [];
  public info = ''

  ngOnInit() {
    console.log(this.contactserv.returninfo());

    console.log(this.contactserv.getcontact());
    this.contactarray = this.contactserv.getcontact()
    console.log(this.contactarray);

    this.info = this.contactserv.getcontact();
    console.log(this.info);

    if (localStorage['contacts_details']) {
      this.contactarray = JSON.parse(localStorage['contacts_details'])
    }
  }

  signUp() {
    console.log('How are you');

    let contactObj = {
      fullName: this.fullName,
      email: this.email,
      address: this.address,
      mobile: this.mobile
    }

    this.contactarray.push(contactObj);
    localStorage.setItem('contacts_details', JSON.stringify(this.contactarray));
    console.log(this.contactarray);

    this.fullName = ''
    this.email = ''
    this.address = ''
    this.mobile = ''
  }

  view(i: any) {
    this.rout.navigate([`full_details/${i}`])
    console.log(i);
  }
}
