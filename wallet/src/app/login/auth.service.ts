import { Injectable } from '@angular/core';
import { AccountUser } from './accoutUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  public login(userInfo: AccountUser){
    // localStorage.setItem('ACCESS_TOKEN', "access_token");
    sessionStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    // return localStorage.getItem('ACCESS_TOKEN') !== null;
    return sessionStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    // localStorage.removeItem('ACCESS_TOKEN');
    sessionStorage.removeItem('ACCESS_TOKEN');
  }
}
