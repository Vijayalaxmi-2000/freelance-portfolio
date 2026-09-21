import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

    constructor(
    private cdr: ChangeDetectorRef
  ) {}

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  isSubmitting = false;
  
  successMessage = '';
  errorMessage = '';

  async submitForm(event: Event): Promise<void> {

    // IMPORTANT: prevent browser page reload
    event.preventDefault();

    this.submitted = true;

    this.successMessage = '';
    this.errorMessage = '';

    // Validate form
    if (
      !this.isNameValid() ||
      !this.isEmailValid() ||
      !this.isSubjectValid() ||
      !this.isMessageValid()
    ) {
      return;
    }

    this.isSubmitting = true;

    try {

      const response = await emailjs.send(
        'service_ekyhaov',
        'template_1so8j0o',
        {
          name: this.contact.name,
          email: this.contact.email,
          subject: this.contact.subject,
          message: this.contact.message
        },
        {
          publicKey: 'BNZr-ODNGOWoC_hiT'
        }
      );

      console.log('EmailJS SUCCESS:', response.status, response.text);

      this.successMessage =
        'Message sent successfully! I will get back to you soon.';

      // Clear form
      this.contact = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      this.submitted = false;
      this.cdr.detectChanges();
    } catch (error) {

      console.error('EmailJS FAILED:', error);

      this.errorMessage =
        'Unable to send your message. Please try again or email me directly.';

    } 
    finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }


  isNameValid(): boolean {
    return this.contact.name.trim().length >= 2;
  }


  isEmailValid(): boolean {

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(
      this.contact.email.trim()
    );
  }


  isSubjectValid(): boolean {
    return this.contact.subject.trim().length >= 3;
  }


  isMessageValid(): boolean {
    return this.contact.message.trim().length >= 10;
  }
}