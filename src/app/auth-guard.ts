import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from './../auth/service/authservice';
import { inject ,PLATFORM_ID } from '@angular/core';
import { TokenStorage } from '../util/token.storage';
import { isPlatformBrowser } from '@angular/common';


export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(Authservice);
  const router = inject(Router);
  const tokenStorage= inject(TokenStorage);
  const platform = inject(PLATFORM_ID);


    if(tokenStorage.getToken()!= null && isPlatformBrowser(platform))
    {
      return true;
      // if(isPlatformBrowser(platform))
      // {
      // return true;
      // }
    }
    else {
        // user not logged in, redirect to login
       
        router.navigate(['/login']);
        return false;
      }
 
  
  //   if (authService.isAuthenticatedUser()) {
  //   console.log("bus bahi bus ");
  //     return true; // allow access
  // } else {
  //   // user not logged in, redirect to login
  //   console.log("zidad baat nai");
  //   router.navigate(['/login']);
  //   return false;
  // }
 
  
};
