import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
})
export class AppConfigModule {}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
