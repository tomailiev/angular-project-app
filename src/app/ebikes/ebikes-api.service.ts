import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IEbike } from '../shared/interfaces/ebike';
import { IEbikeBase } from '../shared/interfaces/ebikeBase';
import { IUser } from '../shared/interfaces/user';
import { AuthService } from '../user/auth.service';

@Injectable()
export class EbikesApiService {
  ebikes: IEbike[];
  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Observable<IEbike[]> {
    return this.http.get<IEbike[]>(`${environment.apiUrl}/ebikes`)
      .pipe(
        tap((ebikes: IEbike[]) => this.ebikes = ebikes),
        catchError((err, caught) => {
          console.log(err);
          console.log(caught);
          
          return of(err)
        })
      );
  }

  getOne(id: string): Observable<IEbike> {
    return this.http.get<IEbike>(`${environment.apiUrl}/ebikes/${id}`);
  }

  // updateOne(id: string, userProp: string, ebikeProp?: string): Observable<{ebike: IEbike, user: IUser} | IUser> {
  //   if (ebikeProp) {
  //     return forkJoin({
  //       ebike: this.http.put<IEbike>(`${environment.apiUrl}/ebikes/${id}`, { $addToSet: { [ebikeProp]: this.authService.currentUser._id } }),
  //       user: this.http.put<IUser>(`${environment.apiUrl}/users/${this.authService.currentUser._id}`, { $addToSet: { [userProp]: id } })
  //     }).pipe(
  //       tap((values:{user: IUser, ebike: IEbike}) => this.authService.currentUser = values.user)
  //     )
  //   }

  //   return this.http.put<IUser>(`${environment.apiUrl}/users/${this.authService.currentUser._id}`, { $addToSet: { [userProp]: id } })
  //     .pipe(
  //       tap((user: IUser) => this.authService.currentUser = user)
  //     )
  // }

  createOne(data: IEbikeBase): Observable<any> {
    const withCreator = Object.assign(data, { creatorId: this.authService.currentUser._id });
    return this.http.post<IEbike>(`${environment.apiUrl}/ebikes`, withCreator)
      .pipe(
        mergeMap(ebike => {
          return this.authService.updateOne({ $addToSet: { selling: ebike._id } })
        })
      )
  }


}
