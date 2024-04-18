import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceService } from '../../services/contact-service.service';

@Component({
  selector: 'app-behavior',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behavior.component.html',
  styleUrl: './behavior.component.css'
})
export class BehaviorComponent {
  constructor(public rout: Router, public behavior: ContactServiceService) { }

  public fullName: string = ''
  public email: string = ''
  public address: string = ''
  public mobile: string = ''

  public contactarray = []
  public behassobj: any = []

  sendContact(contact: any, i: number, fullName: string, email: string, address: string, mobile: string) {
    // console.log(fullName, email, address, mobile);

    // let newobj = {
    //   fullName: fullName,
    //   email: email,
    //   address: address,
    //   mobile: mobile
    // }

    // this.contactarray.splice(i, 1, newobj)
    // console.log(this.contactarray);

    // localStorage.setItem('Contacts', JSON.stringify(this.contactarray));

    this.behavior.behaviorAss.next(contact)
    console.log(contact);
  }

  ngOnit() {
    this.behavior.behaviorAss.subscribe((data) => {
      console.log(data);
      this.behassobj = data
      console.log(this.behassobj);
    })
  }


  // ngOnInit() {
  //   console.log(this.contactserv.returninfo());

  //   console.log(this.contactserv.getcontact());
  //   this.contactarray = this.contactserv.getcontact()
  //   console.log(this.contactarray);

  //   this.info = this.contactserv.getcontact();
  //   console.log(this.info);

  //   if (localStorage['contacts_details']) {
  //     this.contactarray = JSON.parse(localStorage['contacts_details'])
  //   }
  // }

  // signUp() {
  //   console.log('How are you');

  //   let contactObj = {
  //     fullName: this.fullName,
  //     email: this.email,
  //     address: this.address,
  //     mobile: this.mobile
  //   }

  //   this.contactarray.push(contactObj);
  //   localStorage.setItem('contacts_details', JSON.stringify(this.contactarray));
  //   console.log(this.contactarray);

  //   this.fullName = ''
  //   this.email = ''
  //   this.address = ''
  //   this.mobile = ''
  // }

  view(i: any) {
    this.rout.navigate([`full_details/${i}`])
    console.log(i);
  }
}
