import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifiedRequest=req.clone({
     headers:req.headers.append('app-id','2746554673889276546276'),
     
 
    });
     return next.handle(modifiedRequest);
   } 
}
