import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {  
 contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;


  submitForm(): void {

    if (
      !this.contact.name.trim() ||
      !this.contact.email.trim() ||
      !this.contact.subject.trim() ||
      !this.contact.message.trim()
    ) {
      return;
    }

    this.isSubmitting = true;

    console.log('Contact form:', this.contact);

    // Email service will be connected here later.

    this.isSubmitting = false;
  }

}