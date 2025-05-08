import {Component, OnInit} from '@angular/core';
// import { LocalDate } from "ts-extended-types";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  myAge: number | string

  constructor() {
    const myBirthDate = new Date(2005, 9, 12);
    const today = new Date();
    const diff = today.getTime() - myBirthDate.getTime();
    const ageDate = new Date(diff);
    this.myAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  }


  ngOnInit(): void {
  }

}


