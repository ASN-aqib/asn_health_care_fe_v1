import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Authservice } from '../../auth/service/authservice';
import { catchError, throwError } from 'rxjs';
import { TokenStorage } from '../token.storage';
import { Token, TokenType } from '@angular/compiler';
import { takeCoverage } from 'v8';

export const  jwtInterceptor: HttpInterceptorFn = (req, next) => {

 
  const tokenStorage = inject(TokenStorage);
  
  
   let token = tokenStorage.getToken();
  
   console.log("intercept token",token);

  const clonedRequest = req.clone({
   setHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
  });

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error.message);
      return throwError(() => new Error(error.message));
    })
  );
};