import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SearchBoxComponent } from './shared/components/searchBox/searchBox.component'; 
// import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
// import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
// import { HomePageComponent } from './shared/pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,SearchBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countryApp';
}