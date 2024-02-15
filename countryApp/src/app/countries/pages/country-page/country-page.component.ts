import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
  }
}
