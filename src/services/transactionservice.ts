import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { WebConstants } from '../util/web.constants';
import { BaseResponse } from '../util/helper/base.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Transactionservice {

    public baseUrl: string = environment.BaseServiceUrl;
    
        constructor(public ajaxHelper: AjaxHelper) { }
  

    getAll(): Observable<BaseResponse<any>> {
     let url = this.baseUrl + WebConstants.API_URL.TRANSACTION.FIND_ALL;
          return this.ajaxHelper.get(url);
    }
}
