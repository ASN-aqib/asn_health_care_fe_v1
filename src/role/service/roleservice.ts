import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AjaxHelper } from '../../util/helper/ajaxhelper';
import { TokenStorage } from '../../util/token.storage';
import { WebConstants } from '../../util/web.constants';
import { BaseResponse } from '../../util/helper/base.response';


@Injectable({
  providedIn: 'root',
})
export class RoleService {
    public baseUrl: string = environment.BaseServiceUrl;
 
    constructor(public ajaxHelper: AjaxHelper) { }

    
  getAllRoles(): Observable<BaseResponse<any>> {
    let url = this.baseUrl + WebConstants.API_URL.ROLE.FIND_ALL;

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
