import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nested-reactive-form',
  templateUrl: './nested-reactive-form.component.html',
  styleUrls: ['./nested-reactive-form.component.scss'],
})
export class NestedReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    const cellPhone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: cellPhone,
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
}
