import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../services/contact-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-display.component.html',
  styleUrl: './navbar-display.component.css'
})

export class NavbarDisplayComponent {
  constructor(public Activatedr: ActivatedRoute,
  public object: ContactServiceService) { };  
  
  public contactobj: any = {};
  ngOnInit() {
    console.log(this.Activatedr.snapshot.params['index']);
    let fullName = this.Activatedr.snapshot.params['index'];
    console.log(fullName);

    let contactarray = JSON.parse(localStorage['contacts_details']);
    console.log(contactarray);
    // console.log(contactarray['index']);
    
    this.contactobj = contactarray.find((contact: any) => contact.fullName === fullName);

    // console.log(this.object.arrayone);
  }
}