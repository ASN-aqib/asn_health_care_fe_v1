import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';
import { Loaderservice } from './../../services/loaderservice';

 
export const LoaderInterceptor : HttpInterceptorFn = (req, next) => {
    
     const loaderService = inject(Loaderservice);
 
   loaderService.show();
  return next(req).pipe(
   delay(1000),
    finalize(() => loaderService.hide()));
};
