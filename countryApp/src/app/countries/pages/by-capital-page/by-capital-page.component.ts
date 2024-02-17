import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  handleSearchTextChange(searchText: string) {
    console.log('Texto de búsqueda:', searchText);
    this.getCountriesByCapital(searchText);
  }

  getCountriesByCapital(capital: string): void {
    this.countryService.getCountriesByCapital(capital)
  .subscribe(newCountries => this.countries = [...this.countries, ...newCountries]);
  }
}