import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap, switchMap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.interface';

export interface LoginForm {
  email: string;
  password: string;
};

export const JWT_NAME = 'blog-token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(loginForm: LoginForm) {  

    return this.http.post<any>('/api/users/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map((token) => {
        console.log('token');
        localStorage.setItem(JWT_NAME, token.access_token);
        return token;
      })
    )
  }

  logout() {
    localStorage.removeItem(JWT_NAME);
  }

  register(user: User) {
    return this.http.post<any>('/api/users', user).pipe(
      tap(user => console.log(user)),
      map(user => user)
    )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_NAME);
    if(token != null){
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
    
  }

  getUserId(): Observable<number>{
    // return of(localStorage.getItem(JWT_NAME)).pipe(
    //   switchMap((jwt: string) => of(this.jwtHelper.decodeToken(jwt)).pipe(
    //     map((jwt) => jwt.user.id))
    //   )
    // )
    return of(1)
  }

}
