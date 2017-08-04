import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from "@angular/router";

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data: Data) => {
        console.log(data['server']);
        this.server = data['server'];
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id'])
    //   }
    // );
    // Above code is right but we will use Resolve
    
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling : 'merge'});
  }

}
