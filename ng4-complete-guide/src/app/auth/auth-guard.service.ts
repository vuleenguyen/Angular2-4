import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated();
    }

    constructor(private authService:AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated();
    }

}