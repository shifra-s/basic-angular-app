import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password:string): Observable<string>{
    if (email=='a@a.com' && password=='aaa') {
      return of('7t78t7t8vyfuygjhjj').pipe(
        map(res => {
          this.setToken(res);
          return res;
        })
      )} 
       else {
        return throwError('user or password is incorrect');
    }
  }
  

  setToken(t:string) {
    return window.localStorage.setItem(environment.tokenKey, t);
  }

  getToken(){
    return window.localStorage.getItem(environment.tokenKey);
  }

//tell me if user is logged in
  isLogged():boolean {
    return this.getToken()!= null;
  }
}