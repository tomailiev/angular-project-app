import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../user/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {     
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse): Observable<any> => {
                if (err.status === 401) {
                    console.log(err.error?.message);
                    this.authService.currentUser = null;
                    this.authService.warningMessage = 'Session timed out. Please log back in.'
                    this.router.navigate(['/user/login'])
                    return of(null);
                }
                return throwError(err);
            })
        );
    }

    
}