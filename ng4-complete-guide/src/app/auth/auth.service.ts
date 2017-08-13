import { Http } from "@angular/http";
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    
    token: string;

    constructor(private router: Router,
                private route: ActivatedRoute) {
        
    }

    signupUser(email: string , password: string) {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                response => {
                    firebase.auth().currentUser.getToken().then(
                        (token) => {
                            this.token = token;
                        }
                    );

                    this.router.navigate(['/'], {relativeTo: this.route});
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    getToken() {
        firebase.auth().currentUser.getToken().then(
                    (token) => {
                        this.token = token;
                    }
        );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}