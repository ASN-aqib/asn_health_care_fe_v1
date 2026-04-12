import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { BaseResponse } from '../util/helper/base.response';
import { Observable } from 'rxjs';
import { WebConstants } from '../util/web.constants';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  

  public baseUrl: string = environment.BaseServiceUrl;
  
  constructor(public ajaxHelper: AjaxHelper) { }


     getAllZones(): Observable<BaseResponse<any>> {
           let url = this.baseUrl + WebConstants.API_URL.ZONE.FIND_ALL;
                    
          return this.ajaxHelper.get(url);
      }

}
