import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authservice } from '../../auth/service/authservice';
import { catchError, throwError } from 'rxjs';
import { TokenStorage } from '../token.storage';
import { Token, TokenType } from '@angular/compiler';
import { takeCoverage } from 'v8';

export const  jwtInterceptor: HttpInterceptorFn = (req, next) => {

 
  

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer YOUR_TOKEN_HERE`, // Replace with a dynamic token
    },
  });

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error.message);
      return throwError(() => new Error(error.message));
    })
  );
};