import { Injectable } from '@angular/core';
import { AuthenticationToken } from '../model/authentication.token';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AjaxHelper } from '../../util/helper/ajaxhelper';
import { TokenStorage } from '../../util/token.storage';
import { WebConstants } from '../../util/web.constants';
import { BaseResponse } from '../../util/helper/base.response';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  public baseUrl: string = environment.BaseServiceUrl;
  
  public currentUserSubject!: BehaviorSubject<AuthenticationToken>;
  public currentUser!: Observable<AuthenticationToken>;
  

  constructor(public tokenStorage: TokenStorage,
    public ajaxHelper: AjaxHelper) {
    //  let loggedInUser = this.tokenStorage.getByKey(WebConstants.USER.LOGGED_IN);

    // console.log("AuthenticationService.loggedInUser={}", loggedInUser);

    // if (loggedInUser !== 'undefined') {
    //   this.currentUserSubject = new BehaviorSubject<AuthenticationToken>(JSON.parse(loggedInUser));
    //   this.currentUser = this.currentUserSubject.asObservable();
    // }
  }

   public get currentUserValue(): AuthenticationToken {
    return this.currentUserSubject.value;
  }


  
  public login(loginObject: any): Observable<BaseResponse<any>> {
    return this.ajaxHelper.login(this.baseUrl + WebConstants.API_URL.LOGIN, loginObject)
      .pipe(map(response => {

       
         this.tokenStorage.saveDetails(WebConstants.USER.LOGGED_IN,
         JSON.stringify(response));
         this.tokenStorage.saveTokenObject(response.access_token!);
         this.tokenStorage.saveToken(response.access_token!); 
 


        // if (response.code === WebConstants.STATUS.CODE_SUCCESS) {
        //    let data = response.data;
        //    let token = data.token;
        //    this.tokenStorage.saveDetails(WebConstants.USER.LOGGED_IN,
        //      JSON.stringify(data));
        //    this.tokenStorage.saveTokenObject(token);
        //     this.tokenStorage.saveToken(response.access_token!); 
        //    this.currentUserSubject.next(data);
        // } else {
        //   alert(response.value);
        // }
        return response;
      }));
  }

  
}
