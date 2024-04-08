import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactServiceService {
  constructor() { }
  public behaviorSubjec = new BehaviorSubject<any>(
    { name: 'Tolu', address: 'Oshogbo', age: 34 }
  );

  // public arrayone = [
  //   { name: 'Tolu', address: 'Oshogbo', age: 34 },
  //   { name: 'Tade', address: 'Iwo', age: 45 },
  //   { name: 'Tayo', address: 'Ogbomosho', age: 23 }
  // ]

  public info = 'My name is Ayoola'

  public returninfo() {
    let infos = 'my name is ASAAD'
    return infos
  }

  public getcontact() {
    return JSON.parse(localStorage['contacts_details'])
  }
}
