import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  constructor(public activatedr: ActivatedRoute) { };
  public user: any = {};

  ngOnInit() {
    let fname = this.activatedr.snapshot.params['index'];
    console.log(fname);

    let reactivearray = JSON.parse(localStorage['reactiveform']);
    console.log(reactivearray);

    this.user = reactivearray.find((user: any) => user.fname === fname);
  }
}