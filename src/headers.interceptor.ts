import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from 'express';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  jwtToken: String = "";

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(
      (evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          console.log('---> status:', evt.status);
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log("401 error");
          }
          else if (err.status === 403) {
            console.log("403 error");
          }
          else if (err.status === 404) {
            console.log("404 error");
          }
          else if (err.status === 500) {
            console.log("500 error");
          }
          else {
            console.log("other error");
          }
        }
      }
    ));
  }

}
