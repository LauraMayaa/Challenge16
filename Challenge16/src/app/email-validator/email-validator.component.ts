import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.component.html',
  styleUrls: ['./email-validator.component.scss']
})
export class EmailValidatorComponent {

  constructor(private fb: FormBuilder) { }

}
