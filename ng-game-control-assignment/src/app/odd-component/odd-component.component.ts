import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-odd-component',
  templateUrl: './odd-component.component.html',
  styleUrls: ['./odd-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OddComponentComponent implements OnInit {
  @Input('oddNumber') odd: number;

  constructor() { }

  ngOnInit() {
  }

}
