import { Component } from '@angular/core';
import { UsersService } from "app/users.service";
import { CounterService } from "app/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  
}
