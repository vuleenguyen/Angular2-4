import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users.service";
import { CounterService } from "app/counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]

})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  
  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
