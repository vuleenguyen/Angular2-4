import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control-component',
  templateUrl: './game-control-component.component.html',
  styleUrls: ['./game-control-component.component.css']
})
export class GameControlComponentComponent implements OnInit {
  @Output('startGameEvt') startGame = new EventEmitter<number>();
  // this above event can be call from outside

  interval;
  gameNumber: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(
      () => {
        this.gameNumber++;
        this.startGame.emit(this.gameNumber);
      }  
    ,1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
