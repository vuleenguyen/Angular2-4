import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from "app/users.service";
import { CounterService } from "app/counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]

})
export class InactiveUsersComponent {
  @Input() users: string[];
  
  constructor(private usersService: UsersService, private counterService: CounterService) {}

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    
    console.log("The amount convert from InActive to Active: " + ++this.counterService.count);
  }

}
