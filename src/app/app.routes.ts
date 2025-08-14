import { Routes, provideRouter, withRouterConfig } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact'
import { ServicesComponent } from './pages/services/services';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }
];
