// countries/services/country.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Country } from '../interfaces/country';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'; // URL de la API-Rest

  constructor(private http: HttpClient) {}

  // Método para obtener información de un país por su nombre
  getCountryBypais(pais: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${pais}`)
    .pipe(
      catchError(error => {
        // console.error('Error al buscar país:', error);
        alert('Error al buscar país. Por favor, inténtalo de nuevo.'); // Muestra el alert
        return of([]); // Vacía el array de resultados
      })
    );
  }

  // Método para obtener información de países por su capital
  getCountriesByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`)
    .pipe(
      catchError(error => {
        // console.error('Error al buscar país:', error);
        alert('Error al buscar país. Por favor, inténtalo de nuevo.'); // Muestra el alert
        return of([]); // Vacía el array de resultados
      })
    );
  }

  // getByCapital(capital: string): Observable<Country[]> {
  //   const endpoint = capital/${capital};
  //   return this.http.get<Country[]>(${this.apiUrl}${endpoint})
  // }

  // Método para obtener información de países por su región
  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError(error => {
        // console.error('Error al buscar país:', error);
        alert('Error al buscar país. Por favor, inténtalo de nuevo.'); // Muestra el alert
        return of([]); // Vacía el array de resultados
      })
    );
  }
  getCountryByCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      catchError(error => {
        // console.error('Error al buscar país:', error);
        alert('Error al buscar país. Por favor, inténtalo de nuevo.'); // Muestra el alert
        return of([]); // Vacía el array de resultados
      })
    );
  }
  
}

