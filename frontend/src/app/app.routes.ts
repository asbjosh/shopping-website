import { Routes } from '@angular/router';
import { SignUpPage } from './sign-up-page/sign-up-page';
import { LoginPage } from './login-page/login-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignUpPage,
    },
    {
        path: 'login',
        component: LoginPage,
    },
];