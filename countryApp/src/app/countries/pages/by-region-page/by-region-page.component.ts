import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
  }
}
