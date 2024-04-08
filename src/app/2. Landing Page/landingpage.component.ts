import { Component } from '@angular/core';
import { NavbarComponent } from '../1. Navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

interface firstObject {
  age: number,
  address: string,
  school: string
}

interface secondObject {
  age: number,
  address: string,
  school: string
}

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})

//1.number, string, boolean, object, array ,undefined, inference,union
//2.standard routing, parameterzed or dynamic routing, wildcard routing, redirection routing, children/nested routing, guarded or protected routing, programmatic redirection


export class LandingpageComponent {
  public fullName: string | number | boolean = 'Jane Doe'
  public email: string = 'janedoe@unknown.com'
  public password: number = 1111
  public confirmPassword: number = 1110
  public correct: boolean = false
  public x: undefined | number | string = 0
  public age: any

  public object: firstObject = {
    age: 100,
    address: 'Ogbomosho',
    school: 'SQI'
  }

  public fisrtArray: (number | string | boolean)[] = [1, 2, 3, 4, 'A', 'B', 'C', 'D', true, false]

  public secondArray: number[] = [1, 2, 3, 4]

  public thirdArray: string[] = ['A', 'B', 'C', 'D']

  public fourthArray: boolean[] = [true, false]

  public fifthArray: { name: string, age: number }[] = [{ name: 'John', age: 25 }, { name: 'Jane', age: 25 }]

  public sixthArray: secondObject[] = [{ age: 100, address: 'Ogbomosho', school: 'SQI' }, { age: 100, address: 'Ibadan', school: 'SQI' }, { age: 100, address: 'Abeokuta', school: 'SQI' }]

  public seventhArray: secondObject[] = [{ age: 100, address: 'Ogbomosho', school: 'SQI' }, { age: 100, address: 'Ibadan', school: 'SQI' }, { age: 100, address: 'Abeokuta', school: 'SQI' }]

  constructor(public actr: ActivatedRoute) { }

  ngOnInit() {
    this.fullName = 'John Doe'
    this.email = 'johndoe@unknown.com'
    this.password = 0
    this.confirmPassword = 0
    this.correct = true
    this.x = 'Thank you'

    console.log(this.fullName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
    console.log(this.correct);
    console.log(this.x);

    console.log(this.object.age);
    console.log(this.object.address);
    console.log(this.object.school);

    console.log(this.fifthArray[0]);
    console.log(this.fifthArray[1]);

    console.log(this.sixthArray[0]);
    console.log(this.sixthArray[1]);
    console.log(this.sixthArray[2]);

    // console.log(this.actr.snapshot.params['index']);
  }
}
