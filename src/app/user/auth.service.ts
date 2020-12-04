import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { environment } from '../../environments/environment'
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) { }

  login(data: { email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiUrl}/users`, data)
      .pipe(
        tap((user: IUser) => this.currentUser = user)
      );
  }

  register(data: { email: string, password: string, name: string }): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/users`, data);
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/${this.currentUser._id}`, {}).pipe(
      tap(() => this.currentUser = null)
    );
  }

  getOne(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiUrl}/users/${id}`)
      .pipe(
        tap((user: IUser) => this.currentUser = user)
      );
  }

  getCurrentUser(): Observable<IUser | null> {
    return this.http.get<IUser>(`${environment.apiUrl}/users/loginCheck`)
      .pipe(
        tap((user: IUser) => {
          this.currentUser = user;
        }),
        catchError(() => { 
          this.currentUser = null; 
          console.log('error on getting current user');
          return of(null)
         })
      );
  }

  updateOne(prop: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/users/${this.currentUser._id}`, prop)
      .pipe(
        tap((user:IUser) => {
          this.currentUser = user;
        }),
        catchError(() => { return of(null) })
      )
  }
}
