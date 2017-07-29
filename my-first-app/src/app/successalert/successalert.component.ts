import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-successalert]',
  template: '<h1>Congratulation! You get a successful</h1>',
  styles: [ `
    h1 {
      color: green;
      font-weight: bold;
    }
  `]
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
