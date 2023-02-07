import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent {
@Input() label: string = ""

}
