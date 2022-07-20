import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailFormControl: FormControl
  nameFormControl: FormControl
  lNameFormControl: FormControl
  constructor() {
    this.emailFormControl = new FormControl('');
    this.nameFormControl = new FormControl('');
    this.lNameFormControl = new FormControl('');
  }

  ngOnInit(): void {

  }

}
