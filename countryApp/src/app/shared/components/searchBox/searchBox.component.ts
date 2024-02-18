import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchBox',
  standalone: true,
  imports: [],
  templateUrl: './searchBox.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';

  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';

  onSearchTextChange(event: any) {
    this.searchText = event.target.value;
  }

  onSearch() {
    this.searchTextChange.emit(this.searchText);
  }
}
//keyup.enter 