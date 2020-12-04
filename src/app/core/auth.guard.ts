import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router, private authService: AuthService) { }


  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    let stream$: Observable<IUser | null>;

    if (this.authService.currentUser === undefined) {
      stream$ = this.authService.getCurrentUser();
    } else {
      stream$ = of(this.authService.currentUser);
    }

    return stream$.pipe(
      map((user) => {
        const needsAuth = route.data.needsAuth;
        return typeof needsAuth !== 'boolean' || needsAuth === !!user;
      }),
      tap((canContinue) => {
        if (canContinue) { return; }
        const url = this.router.url;
        this.router.navigateByUrl(url)
      }),
      catchError((err) => {
        this.authService.currentUser = null;
        console.log(err);
        this.router.navigate(['/'])
        return of(null);
      })
    );
  }

}
