import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
   showPassword = false;

  isPasswordEmpty = true;

  rules = {
    minLength: false,
    specialOrDigit: false,
    lowercase: false,
    uppercase: false,
  };

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onPasswordInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value ?? '';
    this.isPasswordEmpty = value.length === 0;

    // opdater regler live
    this.rules.minLength = value.length >= 8;
    this.rules.specialOrDigit = /[\d\W_]/.test(value); // tal eller special
    this.rules.lowercase = /[a-z]/.test(value);
    this.rules.uppercase = /[A-Z]/.test(value);
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    // TODO: din signup logik her
  }
}
