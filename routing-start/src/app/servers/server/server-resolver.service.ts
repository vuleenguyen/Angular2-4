import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "app/servers/servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {
        
    }
    
    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
            // resolve will fetch data at here
            // Route Snapshot is enough because ServerComponent it will execute every time
            return this.serversService.getServer(+route.params['id']);
    }

}