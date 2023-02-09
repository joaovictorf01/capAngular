import { Component } from '@angular/core';
import { Person } from './person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  person: Person;

  savePersonInfo() {
    this.person.name = this.person.name;
    this.person.email = this.person.email;
    this.person.age = this.person.age;
    alert(this.person.name);
  }
}
