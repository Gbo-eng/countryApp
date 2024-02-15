import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule

// const countryRoutes: Routes = [
//     { path: 'capital', component: ByCapitalPageComponent },
//     { path: 'country', component: CountryPageComponent },
//     { path: 'by-country-Page', component: ByCountryPageComponent },
//     { path: 'region', component: ByRegionPageComponent },
//     // { path: '', component: ByCountryPageComponent },
// ];

// @NgModule({
//   imports: [
//     HttpClientModule, // Agrega HttpClientModule a los imports del NgModule
//     RouterModule.forChild(countryRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class CountryRoutesModule {}

export const countryRoutes: Routes = [
    { path: 'capital', component: ByCapitalPageComponent },
    { path: 'country', component: CountryPageComponent },
    { path: 'by-country-Page', component: ByCountryPageComponent },
    { path: 'region', component: ByRegionPageComponent },
    // { path: '', component: ByCountryPageComponent },
];