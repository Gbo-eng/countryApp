// countries/services/country.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'; // URL de la API-Rest

  constructor(private http: HttpClient) {}

  // Método para obtener información de un país por su nombre
  getCountryBypais(pais: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${pais}`);
  }

  // Método para obtener información de países por su capital
  getCountriesByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`);
  }

  // Método para obtener información de países por su región
  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`);
  }
}