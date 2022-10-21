import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler) {
   let modifiedRequest=req.clone({
    headers:req.headers.append('app-id','63523759019fad2149e1a51e'),
    

   });
    return next.handle(modifiedRequest);
  } 
}
