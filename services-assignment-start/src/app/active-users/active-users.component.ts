import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from "app/users.service";
import { CounterService } from "app/counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent {
  @Input() users: string[];
  
  constructor(private usersService: UsersService,
              private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    console.log("The amount convert from Active to InActive: " + ++this.counterService.count);
  }
}
