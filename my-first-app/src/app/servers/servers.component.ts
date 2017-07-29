import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatedStatus = "No Server Created";
  serverName = 'TestServer';
  username: string = '';
  servers=['TestServer','TestServer 2'];

  constructor() {
     setTimeout(() => {
      this.allowNewServer = true;
     }, 2000)
   }

  ngOnInit() {
  }

  createdServer() {
    this.servers.push(this.serverName);
    this.serverCreatedStatus = "Server Created is: " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.username = '';
  }

}
