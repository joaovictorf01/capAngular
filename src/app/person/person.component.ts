import { Component } from '@angular/core';
import { Person } from './person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  Person: any;
  consolePerson: any;
}
