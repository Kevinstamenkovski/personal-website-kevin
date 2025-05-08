import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false; // Added to track submission state

  constructor() {
    this.contactForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnInit(): void {}

  public sendEmail(e: Event): void {
    e.preventDefault();

    if (this.contactForm.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    this.isSubmitting = true; // Start loading state

    emailjs.sendForm('service_7ubsjas', 'template_4rro9xa', e.target as HTMLFormElement, 'RKjhtOATbHm3lGDiD')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Message sent successfully!');
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      })
      .finally(() => {
        this.isSubmitting = false; // Stop loading state
      });
  }
}
