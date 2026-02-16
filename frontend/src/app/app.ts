import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpPage } from "./sign-up-page/sign-up-page";
import { LoginPage } from './login-page/login-page';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignUpPage, LoginPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
