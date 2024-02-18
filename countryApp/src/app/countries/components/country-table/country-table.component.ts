import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-table.component.html',
  styles: `.search-container{
    margin-bottom: 20px;
  }`
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
  constructor(private router: Router) {}
}