import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}
  onSubmit(data) {
    console.log(data);
  }
  ngOnInit(): void {}
  log(x) {
    console.log(x);
  }
}
