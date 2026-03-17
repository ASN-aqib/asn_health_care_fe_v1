import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { WebConstants } from '../util/web.constants';
import { BaseResponse } from '../util/helper/base.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Roleservice {

      public baseUrl: string = environment.BaseServiceUrl;
  
      constructor(public ajaxHelper: AjaxHelper) { }


      getAll(): Observable<BaseResponse<any>> {
           let url = this.baseUrl + WebConstants.API_URL.ROLE.FIND_ALL_ROLES;
      
          return this.ajaxHelper.get(url);
        }

        addrole(payload: any): Observable<BaseResponse<any>> {
   
          console.log("add role",payload);

          return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.ROLE.ADD_ROLE, payload);
  
            }
      
      
       findById(id: number): Observable<BaseResponse<any>> {
          let url = this.baseUrl + WebConstants.API_URL.ROLE.FIND_BY_ID +id;

            return this.ajaxHelper.get(url);
        }
  
}
