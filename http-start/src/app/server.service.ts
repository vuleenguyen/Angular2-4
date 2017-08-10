import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {
    //because http is service so need Injectable to inject a service to service
    constructor(private http: Http) {
        
    }

    storeServers(servers: any[]) {
        // in there I want to reach out where I want to send such a request
        // and reach out to my server to store my service there
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://udemy-ng-http-d2e84.firebaseio.com/data.json',
            servers, {headers: headers});
        // but actual angular is using observables behind the scene
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-d2e84.firebaseio.com/data.json')
            .map(
                (response) => {
                    const data = response.json();
                    for(let item of data) {
                        item.name = 'FETCHED_' + item.name;
                    }
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw("SOME THING WRONG!!!");
                }
            )
        ;
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-d2e84.firebaseio.com/data/Test2.json')
            .map(
                (response) => {
                    return response.json();
                } 
            )
    }


    updateServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://udemy-ng-http-d2e84.firebaseio.com/data.json',
            servers, {headers: headers});
    }
}