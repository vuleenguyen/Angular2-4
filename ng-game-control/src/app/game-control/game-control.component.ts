import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('stEvent') startEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }
  gameNumber = 0;
  ref: any;

  ngOnInit() {
  }

  startGame() {
   var that = this; 
   this.ref = setInterval(
     () => {
       that.gameNumber = that.gameNumber + 1;
       that.startEvent.emit({gameNumber: that.gameNumber});
     }, 
     1000);
  }

  stopGame() {
    clearInterval(this.ref);
  }
}
