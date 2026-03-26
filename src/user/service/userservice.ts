import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AjaxHelper } from '../../util/helper/ajaxhelper';
import { WebConstants } from '../../util/web.constants';
import { BaseResponse } from '../../util/helper/base.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

   public baseUrl: string = environment.BaseServiceUrl;
   
      constructor(public ajaxHelper: AjaxHelper) { }

    adduser(payload: any): Observable<BaseResponse<any>> {
   
    console.log("add User",payload);

    return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.USER.ADD_USER, payload);
  
  }


  updateuser(payload: any): Observable<BaseResponse<any>> {
   
    return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.USER.UPDATE_USER, payload);
  
  }


 
      getAllUsers(): Observable<BaseResponse<any>> {
          let url = this.baseUrl + WebConstants.API_URL.USER.FIND_ALL;
      
          return this.ajaxHelper.get(url);
        }
  
         
     deleteById(id: number): Observable<BaseResponse<any>> {
          let url = this.baseUrl + WebConstants.API_URL.USER.DELETE_USER + id;
      
          return this.ajaxHelper.get(url);
        }
  
}
