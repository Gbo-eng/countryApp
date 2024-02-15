// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Country } from '../interfaces/country';

// @Injectable({
//   providedIn: 'root'
// })
// export class CountryService {
//   private apiUrl = 'https://restcountries.com/v3/capital/';

//   constructor(private http: HttpClient) { }

//   getCountryByCapital(capital: string): Observable<Country[]> {
//     return this.http.get<Country[]>(`${this.apiUrl}${capital}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  searchByTerm(term: string): Observable<Country[]> {
    const endpoint = `name/${term}`;
    return this.http.get<Country[]>(`${this.apiUrl}${endpoint}`);
  }

  getByCapital(capital: string): Observable<Country[]> {
    const endpoint = `capital/${capital}`;
    return this.http.get<Country[]>(`${this.apiUrl}${endpoint}`);
  }

  getByRegion(region: string): Observable<Country[]> {
    const endpoint = `region/${region}`;
    return this.http.get<Country[]>(`${this.apiUrl}${endpoint}`);
  }
}