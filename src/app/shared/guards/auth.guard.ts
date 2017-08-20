import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/*Firebase*/
import { fbAuth } from './../../../environments/firebase-auth-config';

/*Services*/
import { AuthenticationService } from './../services/firebase/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  teste: any;
  constructor(
    private auth: AuthenticationService, 
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(sessionStorage.access_token) {
      
    } else {
      fbAuth.onAuthStateChanged((user) => {
        if(!user) {
          this.router.navigate(['/login']);
        }
      });
    }
    
    return true;
  }
}
