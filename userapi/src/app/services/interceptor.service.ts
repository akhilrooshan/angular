import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler) {
   let modifiedRequest=req.clone({
    headers:req.headers.append('app-id','635a53738a1bee120f6fe56b'),
    

   });
    return next.handle(modifiedRequest);
  } 
}
