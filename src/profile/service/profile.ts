import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AjaxHelper } from '../../util/helper/ajaxhelper';
import { BaseResponse } from '../../util/helper/base.response';
import { catchError, Observable, throwError } from 'rxjs';
import { WebConstants } from '../../util/web.constants';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

     public baseUrl: string = environment.BaseServiceUrl;
  
     constructor(public ajaxHelper: AjaxHelper, private snackBar: MatSnackBar) { }


      getAllProfile(): Observable<BaseResponse<any>> {
               let url = this.baseUrl + WebConstants.API_URL.PROFILE.FIND_ALL;
           
               return this.ajaxHelper.get(url);
      }


     addProfile(payload: any): Observable<BaseResponse<any>> {
   
          console.log("add profile",payload);

         return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.PROFILE.ADD, payload);
      }

      updateProfile(payload: any): Observable<BaseResponse<any>> {

       return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.PROFILE.UPDATE, payload).pipe(
            catchError((error: HttpErrorResponse) => {
            if (error.status === 409) {
               // Handle the conflict error (e.g., duplicate entry, state mismatch)
               console.warn('Conflict 409: The resource already exists.', error);

                  this.snackBar.open(error.error.message,'Close', {    
                  duration: 4000,    
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                  panelClass: ['success'] 
                });

               
               // You can return a custom user-friendly error message or rethrow it
               return throwError(() => new Error('A conflict occurred. Please verify your data.'));
            }
            // Rethrow other errors (like 400, 500)
            return throwError(() => error);
            })
         );

          //  return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.PROFILE.UPDATE, payload);
      
      }



   
       

      

      delete(userid: any ): Observable<BaseResponse<any>> {

                  console.log("user id",userid);

               let url = this.baseUrl + WebConstants.API_URL.PROFILE.DELETE+userid;
              console.log(url);
               return this.ajaxHelper.get(url);
      }
}
