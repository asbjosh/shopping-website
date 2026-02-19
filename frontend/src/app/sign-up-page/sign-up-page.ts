import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AbstractControl, ControlContainer, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-sign-up-page',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  showPassword = false;

    rules = {
    minLength: false,
    specialOrDigit: false,
    lowercase: false,
    uppercase: false,
  };

  passwordForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.passwordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.hasUppercase,
          this.hasLowercase,
          this.hasSpecialOrDigit,
        ],
      ],
    });

    this.passwordForm.get('password')!.valueChanges.subscribe((value: string) => {
      const v = value ?? '';
      this.rules.minLength = v.length >= 8;
      this.rules.specialOrDigit = /[\d\W_]/.test(v);
      this.rules.lowercase = /[a-z]/.test(v);
      this.rules.uppercase = /[A-Z]/.test(v);
    });
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  hasUppercase(control: AbstractControl) {
    const value = (control.value ?? '') as string;
    return value && !/[A-Z]/.test(value) ? { uppercase: true } : null;
  }

  hasLowercase(control: AbstractControl) {
    const value = (control.value ?? '') as string;
    return value && !/[a-z]/.test(value) ? { lowercase: true } : null;
  }

  hasSpecialOrDigit(control: AbstractControl) {
    const value = (control.value ?? '') as string;
    return value && !/[\d\W_]/.test(value) ? { specialOrDigit: true } : null;
  }

  onSubmit(): void {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    const  { email, password } = this.passwordForm.value;
    console.log('Submit:', { email, password})
  }
}
