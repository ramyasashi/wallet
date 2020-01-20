import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if(!this.authService.isLoggedIn()){
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    // return true;

    //  return this.authService.isLoggedIn()
    // let value = this.authService.isLoggedIn();
    // if(value === true){
    //   this.router.navigate(['/']);
    //   return true;
    // }else{
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    }
}
