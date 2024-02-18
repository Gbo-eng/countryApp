import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
    this.getCountriesBypais(searchText);
  }

  getCountriesBypais(name: string) {
    this.countryService.getCountryBypais(name).subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la capital:', error);
      }
    );
  }
}
