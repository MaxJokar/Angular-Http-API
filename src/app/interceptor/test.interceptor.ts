import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() //TestInterceptor: means its a service
export class TestInterceptor implements HttpInterceptor {

  constructor() {}
// The point all request going to  "Interceptor", Hashing
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // in Network loggin we can see :api_token: MAXPHILIroseSveta555555555555
    const API_TOKEN = 'MAXPHILIroseSveta555555555555';
    const requestCopy = request.
    clone({ setHeaders :{API_TOKEN},body:{ hello: 'world'}})
    // because the browser only shows headers and Not Body we do the following
    console.log(requestCopy);
    return next.handle(requestCopy);
  }
}
