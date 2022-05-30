import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: any = localStorage.getItem('token');
    const userId: any = localStorage.getItem('userId');
    let request = req;

    if (token && userId) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
        return throwError( err );
      })
    );
  }
}
