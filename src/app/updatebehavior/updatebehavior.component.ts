import { Component } from '@angular/core';

@Component({
  selector: 'app-updatebehavior',
  standalone: true,
  imports: [],
  templateUrl: './updatebehavior.component.html',
  styleUrl: './updatebehavior.component.css'
})
export class UpdatebehaviorComponent {
  public message = 'This is SQI College of ICT, Ogbomosho'

  ngOnit() {
    console.log(this.message);
  }
}
