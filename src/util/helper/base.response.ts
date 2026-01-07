export class BaseResponse<T> {
    code?: number;
    value?: string;
    data?: T; 
    access_token?:any;
  }
   