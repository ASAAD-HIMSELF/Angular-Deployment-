import { Component } from '@angular/core';
import { UpdatesbehaviorComponent } from '../updatesbehavior/updatesbehavior.component';
import { BehaviorComponent } from '../behavior/behavior.component';

@Component({
  selector: 'app-parentsbehavior',
  standalone: true,
  imports: [UpdatesbehaviorComponent, BehaviorComponent],
  templateUrl: './parentsbehavior.component.html',
  styleUrl: './parentsbehavior.component.css'
})
export class ParentsbehaviorComponent {

}
