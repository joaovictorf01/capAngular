import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-selector',
  templateUrl: './my-selector.component.html',
  styleUrls: ['./my-selector.component.css']
})
export class MySelectorComponent {
@Input() label: string = "";
@Input() values: Array<string> = [];
}
