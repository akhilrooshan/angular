import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  token:any=[]
  constructor() {
    this.token="Bearer"+" "+localStorage.getItem('token')
   }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifiedRequest=req.clone({
      headers:req.headers.append("Authorization",this.token),
     });
     return next.handle(modifiedRequest);
   } 
}
