import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from "app/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = !this.user1Activated;
        } else {
          this.user2Activated = !this.user2Activated;
        }
      }
    )
  }

  ngOnDestroy() {
    this.usersService.userActivated.unsubscribe();
  }
}
