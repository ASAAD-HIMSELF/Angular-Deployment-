import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactServiceService } from '../../services/contact-service.service';

interface ContactInterface {
  fullName: string,
  email: string,
  address: string,
  mobile: string
} // interface for contact form

@Component({
  selector: 'app-updatesbehavior',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatesbehavior.component.html',
  styleUrl: './updatesbehavior.component.css'
})
export class UpdatesbehaviorComponent {
  constructor(public behavior: ContactServiceService) { }

  public fullName = ''
  public email = ''
  public address = ''
  public mobile = ''
  public obj: ContactInterface[] = [];
  public contactarray: ContactInterface[] = [];

  ngOnInit() {
    this.behavior.behaviorAss.subscribe((data) => {
      this.obj = data;
      console.log(data);
    })
  }

  signUp() {
    // console.log('How are you');

    let contactObj = {
      fullName: this.fullName,
      email: this.email,
      address: this.address,
      mobile: this.mobile
    }

    this.contactarray.push(contactObj);
    localStorage.setItem('Contacts', JSON.stringify(this.contactarray));
    console.log(this.contactarray);

    this.fullName = ''
    this.email = ''
    this.address = ''
    this.mobile = ''
  }
}
