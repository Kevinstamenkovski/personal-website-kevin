import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor() {

  }


  // TODO: uncomment All Below For EmailJs
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_7ubsjas', 'template_4rro9xa', e.target as HTMLFormElement, 'RKjhtOATbHm3lGDiD')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text)
        alert("Message sent")
      }, (error) => {
        console.log("Error")
      })
  }
  // public sendEmail(e: Event) {
  //   alert("Message Not Delivered, EmailJs Is Temporary Disabled")
  // }









  ngOnInit(): void {}

}
