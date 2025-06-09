import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;
  submitted = false;
  passwordFieldType: 'password' | 'text' = 'password';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check the route data to see if we are in login or sign-up mode
    this.isLoginMode = this.route.snapshot.data['isLoginMode'];

    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for easy access to form controls in the template
  get f() { return this.authForm.controls; }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.authForm.invalid) {
      return;
    }

    console.log('Form Submitted!', this.authForm.value);

    // If it's sign-up mode, redirect to the confirmation page
    if (!this.isLoginMode) {
      this.router.navigate(['/confirmation']);
    } else {
      // For login, you would typically handle authentication and maybe redirect to a dashboard
      alert('Logged in successfully!');
      this.router.navigate(['/']); // Redirect to home on successful login
    }
  }
}
