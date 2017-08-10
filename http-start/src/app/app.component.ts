import { Component, OnInit } from '@angular/core';
import { ServerService } from "app/server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appName;

  constructor(private serverService: ServerService) {
    
  }

  ngOnInit() {
    this.appName = this.serverService.getAppName();
  }

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      // when receive some data
      (response) => console.log(response),
      (error) => console.log(error)
    );

  }
  onUpdate() {
    this.serverService.updateServers(this.servers).subscribe(
      // when receive some data
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => {
        this.servers = servers;
      }
    )
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
