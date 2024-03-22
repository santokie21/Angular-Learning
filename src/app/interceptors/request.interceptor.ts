import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Request Interceptor : ", request);
    const newRequest = request.clone({ headers: new HttpHeaders({ token: "aw5d4a3w5d135rdgz3x84" }) });

    return next.handle(newRequest);
  }
}
