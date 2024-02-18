import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, CommonModule],
  templateUrl: './country-page.component.html',
  styles: `a{
    text-decoration:none;
    color: black;
  }`
})

export class CountryPageComponent {
  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
  }

  country: any;

  constructor(private rutaActiva: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountryByCode(this.rutaActiva.snapshot.params['id']).subscribe(
      (data) => {
        if (data) {
          this.country = data[0];
          console.log(this.country);
        } else {
          console.error('No se encontraron datos del país');
        }
      },
      (error) => {
        console.error('Error al obtener los datos del país:', error);
      }
    );
  }
}
