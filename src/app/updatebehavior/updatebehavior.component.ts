import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-updatebehavior',
  standalone: true,
  imports: [],
  templateUrl: './updatebehavior.component.html',
  styleUrl: './updatebehavior.component.css'
})
export class UpdatebehaviorComponent {
  constructor(public behavior: ContactServiceService) { }
  public message = 'This is SQI College of ICT, Ogbomosho'
  public obj: any = {}

  ngOnInit() {
    console.log(this.message);

    this.behavior.behaviorSubjec.subscribe(data => {
      console.log(data);
      this.obj = data;this.behavior.behaviorSubjec.subscribe(data => {
        console.log(data);
        this.obj = data;
      })
    })
  }
}