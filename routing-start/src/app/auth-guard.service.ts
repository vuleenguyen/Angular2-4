import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "app/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
        | Observable<boolean> | Promise<boolean> {
        
        return this.authService.isAuthenticated().then(
                (authenticate: boolean) => {
                    if (authenticate) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }
}