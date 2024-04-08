import { Component } from '@angular/core';
import { UpdatebehaviorComponent } from '../updatebehavior/updatebehavior.component';
import { BehaviorsubjectComponent } from '../behaviorsubject/behaviorsubject.component';

@Component({
  selector: 'app-parentbehavior',
  standalone: true,
  imports: [UpdatebehaviorComponent, BehaviorsubjectComponent],
  templateUrl: './parentbehavior.component.html',
  styleUrl: './parentbehavior.component.css'
})
export class ParentbehaviorComponent {

}
