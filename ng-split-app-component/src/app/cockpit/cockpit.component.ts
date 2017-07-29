import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('seEvent') serverCreated = new EventEmitter<{type: string,serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new 
    EventEmitter<{type: string,serverName: string, serverContent: string}>();

  @ViewChild('serverContentInput') contentInput: ElementRef;
  constructor() { }

  // lifecycle hook
  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(
      { 
        type: 'red', 
        serverName: serverNameInput.value, 
        serverContent: this.contentInput.nativeElement.value
      });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      { 
        type: 'blueprint', 
        serverName: serverNameInput.value, 
        serverContent: this.contentInput.nativeElement.value
      });
  }

}
