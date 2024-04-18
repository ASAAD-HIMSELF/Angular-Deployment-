import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behaviorsubject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviorsubject.component.html',
  styleUrl: './behaviorsubject.component.css'
})
export class BehaviorsubjectComponent {
  constructor(public behavior: ContactServiceService) { }
  public behobj: any = []

  public array = [
    { name: 'Tolu', address: 'Oshogbo', age: 34 },
    { name: 'Tade', address: 'Iwo', age: 45 },
    { name: 'Tayo', address: 'Ogbomosho', age: 23 }
  ]

  senditem(item:any) {
    this.behavior.behaviorSubjec.next(item)
    console.log(item);
  }

  ngOnit() {
    this.behavior.behaviorSubjec.subscribe((data) => {
      console.log(data);
      this.behobj = data
      console.log(this.behobj);
    })
  }
}
