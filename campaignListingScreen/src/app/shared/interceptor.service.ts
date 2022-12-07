import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifiedRequest=req.clone({
     headers:req.headers.append('msd-az','djguyfuiubewuifdwgiuguywvkubduyvuydv'),
    });
     return next.handle(modifiedRequest);
   } 
}
