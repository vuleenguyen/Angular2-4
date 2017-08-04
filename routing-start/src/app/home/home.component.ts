import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "app/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin = false;

  constructor(private router: Router, 
              private authService: AuthService) {
  }

  ngOnInit() {
    this.isLogin = this.authService.loggedIn;
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams : {allowEdit: 1}, fragment: 'loading'})
  }

  onLogin() {
    this.isLogin = !this.isLogin;
    this.authService.login();
  }

  onLogout() {
    this.isLogin = !this.isLogin;
    this.authService.logout();
  }
}
