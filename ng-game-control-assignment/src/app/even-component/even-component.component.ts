import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-component',
  templateUrl: './even-component.component.html',
  styleUrls: ['./even-component.component.css']
})
export class EvenComponentComponent implements OnInit {

  @Input('evenNumber') even: number;
  constructor() { }

  ngOnInit() {
  }

}
