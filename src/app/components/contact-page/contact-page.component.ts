import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  imports: [
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  disableSubmit: boolean = true;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    emailjs.init('_kGIkUSWkX6ttCTYF'); // Initialize EmailJS with your public key
  }

  ngAfterViewInit() {
    this.contactForm.valueChanges.subscribe(() => {
      this.disableSubmit = this.isFormComplete();
    });
  }
  isFormComplete(): boolean {
    return !Object.values(this.contactForm.controls).every(control => control.value && !control.errors);
  }

  openLinkedIn(e: any) {
    e.preventDefault(); // Prevent default anchor click behavior
    window.open('https://www.linkedin.com/in/darius-canty-7ab23b156/', '_blank'); // Replace with your LinkedIn profile URL
  }

  openGitHub(e: any) {
    e.preventDefault(); // Prevent default anchor click behavior
    window.open('https://github.com/dariuscanty', '_blank'); // Replace with your GitHub profile URL
  }

  onSubmit() {
    if (this.contactForm.valid) {   
      const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-bg-color').trim();
      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();
      const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      const formData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      };

      emailjs.send('service_uranr7h', 'template_bj4stkc', formData, '_kGIkUSWkX6ttCTYF')
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            showConfirmButton: false,
            background: bgColor,
            color: textColor,
            timer: 1500
          });

          this.contactForm.reset();

          Object.keys(this.contactForm.controls).forEach((key) => {
            const control = this.contactForm.get(key);
            control?.markAsUntouched();
            control?.markAsPristine();
            control?.setErrors(null);
          });

          // submitButton.disabled = true;
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            showConfirmButton: false,
            background: bgColor,
            color: textColor,
            timer: 1500
          });
        }
      );
    }
  }
}
