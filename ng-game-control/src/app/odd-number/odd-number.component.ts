import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-odd-number',
  templateUrl: './odd-number.component.html',
  styleUrls: ['./odd-number.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OddNumberComponent implements OnInit {

  @Input() oddNumber;

  constructor() { }

  ngOnInit() {
  }

}
