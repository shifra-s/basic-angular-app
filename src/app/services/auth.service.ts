import { Injectable } from '@angular/core';
import { of, throwError, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//internal parameter in the service
  private _isLogged: BehaviorSubject<boolean>;

  constructor() {
    this._isLogged = new BehaviorSubject<boolean>(false);
   }

  login(email: string, password:string): Observable<string>{
    if (email=='a@a.com' && password=='aaa') {
      return of('7t78t7t8vyfuygjhjj').pipe(
        map(res => {
          this.setToken(res);
          //the value of islogged is true
          this._isLogged.next(true);
          return res;
        })
      )} 
       else {
        return throwError('user or password is incorrect');
    }
  }
  

  private setToken(t:string) {
    return window.localStorage.setItem(environment.tokenKey, t);
  }

  private getToken(){
    return window.localStorage.getItem(environment.tokenKey);
  }

  //logout - delete the token
  private deleteToken(){
    window.localStorage.removeItem(environment.tokenKey);
  }

//returns whether user is logged in
  isLogged():Observable<boolean> {
    return this._isLogged;
    // return of(this.getToken()!= null);
  }

  logout(){
    //user is logged out - so set to false
    this._isLogged.next(false);
    this.deleteToken();
  }
}