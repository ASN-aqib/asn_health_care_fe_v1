import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { Observable } from 'rxjs';
import { BaseResponse } from '../util/helper/base.response';
import { WebConstants } from '../util/web.constants';

@Injectable({
  providedIn: 'root',
})
export class Useractivityservice {


  
      public baseUrl: string = environment.BaseServiceUrl;
  
      constructor(public ajaxHelper: AjaxHelper) { }
  
      
      getAll(): Observable<BaseResponse<any>> {
       let url = this.baseUrl + WebConstants.API_URL.USER_ACTIVITY.FIND_ALL;
  
      return this.ajaxHelper.get(url);
    }
  
}
