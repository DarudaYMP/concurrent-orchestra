import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
  contactForm: FormGroup;
  submitted = false; // To track if the form has been submitted
  isSubmitting = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  faqs = [
    { id: '01', question: 'WHO CAN JOIN THE CONCURRENT ORCHESTRA?', answer: 'Our club is open to all students who have a passion for technology, regardless of their major. A basic understanding of programming concepts is helpful but not required.', isOpen: false },
    { id: '02', question: 'IS IT POSSIBLE TO JOIN THE CLUB ONLINE?', answer: 'Yes, absolutely. We operate in a hybrid model, allowing members to participate fully in all activities, workshops, and projects online.', isOpen: false },
    { id: '03', question: 'WHAT KIND OF PROJECTS DO WE CREATE?', answer: 'We focus on building real-world, high-load web applications. Projects range from social platforms to data visualization tools and backend services.', isOpen: false },
    { id: '04', question: 'HOW DO I APPLY TO JOIN THE CLUB?', answer: 'The application process is simple. Fill out the application form on our website during the recruitment period, and we will get in touch with you for a short interview.', isOpen: false },
    { id: '05', question: 'HOW WILL I BENEFIT FROM PARTICIPATION?', answer: 'You will gain hands-on experience, build a strong portfolio, improve your soft skills through teamwork, and network with mentors and peers.', isOpen: false },
    { id: '06', question: 'WILL THERE BE CERTIFICATES OR RECOMMENDATIONS?', answer: 'Yes, active members who successfully complete projects receive a certificate of participation and can request letters of recommendation from mentors.', isOpen: false }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // Getter for easy access to form controls in the template
  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  toggleFaq(faqId: string): void {
    const clickedFaq = this.faqs.find(f => f.id === faqId);
    if (clickedFaq) {
      const wasOpen = clickedFaq.isOpen;
      this.faqs.forEach(f => f.isOpen = false);
      clickedFaq.isOpen = !wasOpen;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = null;
    this.errorMessage = null;

    if (this.contactForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    this.isSubmitting = true;
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.contactForm.value)
      .pipe(
        finalize(() => this.isSubmitting = false)
      )
      .subscribe({
        next: () => {
          this.successMessage = 'Message sent successfully! We will get back to you shortly.';
          this.contactForm.reset();
          this.submitted = false; // Reset submitted state on success
        },
        error: () => {
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
      });
  }
}