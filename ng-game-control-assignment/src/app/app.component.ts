import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  startGameEvent(startGameNumber: number) {
    if (startGameNumber % 2 === 0) {
      this.evenNumbers.push(startGameNumber);
    } else {
      this.oddNumbers.push(startGameNumber);
    }
  }
}
