import { Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
    { path: 'about-page/', component: AboutPageComponent },
    { path: 'contact-page/', component: ContactPageComponent },
    { path: 'home-page/', component: HomePageComponent },
    // { path: '', component:  },
    // { path: '**', component: },
];