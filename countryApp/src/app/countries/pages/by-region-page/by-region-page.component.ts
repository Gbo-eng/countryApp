import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
    this.getCountriesBypais(searchText);
  }

  getCountriesBypais(region: string) {
    this.countryService.getCountriesByRegion(region).subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la capital:', error);
      }
    );
  }
}
