import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nameInputFormControl: FormControl;
  constructor() {
    this.nameInputFormControl = new FormControl('');
  }

  ngOnInit(): void {

  }

}
