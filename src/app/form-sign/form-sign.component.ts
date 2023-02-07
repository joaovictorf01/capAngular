import { Component } from '@angular/core';

@Component({
  selector: 'app-form-sign',
  templateUrl: './form-sign.component.html',
  styleUrls: ['./form-sign.component.css']
})
export class FormSignComponent {
  cargos:Array<string>  = ["Desenvolvedor", "QA", "Arquiteto"];

}
