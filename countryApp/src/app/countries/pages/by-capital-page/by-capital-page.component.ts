import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
  }
}
