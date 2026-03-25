import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { jwtInterceptor } from '../util/interceptor/jwt-interceptor';
import { LoaderInterceptor } from '../util/interceptor/loader';
import { NgxSpinnerModule, provideSpinnerConfig } from 'ngx-spinner';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideHttpClient(
      withInterceptors([jwtInterceptor,LoaderInterceptor])
    ),
     provideSpinnerConfig({ type: 'ball-scale-multiple' }), // Optional: Global config


    importProvidersFrom(NgxSpinnerModule.forRoot(/*config*/)),
 
 
     provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
 

