import { Component } from '@angular/core';
import { UsersService } from "app/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private usersService: UsersService) {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
 
}
