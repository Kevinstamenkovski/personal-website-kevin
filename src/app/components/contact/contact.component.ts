import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nameFormControl: FormControl;
  constructor() {
    this.nameFormControl = new FormControl('');
  }

  ngOnInit(): void {

  }

}
