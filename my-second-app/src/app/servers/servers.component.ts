import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isShowSecret = false;
  buttonLogs = [];

  constructor() { }

  ngOnInit() {
  }

  toggleSecret() {
    this.isShowSecret = !this.isShowSecret;
    this.buttonLogs.push("Log at: " + new Date());
  }
}
