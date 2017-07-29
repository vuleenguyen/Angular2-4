import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  startGameControl(gameControlValue: {gameNumber: number}) {
    if (gameControlValue.gameNumber % 2 == 0) {
       this.evenNumbers.push(gameControlValue.gameNumber);
    } else {
       this.oddNumbers.push(gameControlValue.gameNumber);
    }
  }
}
