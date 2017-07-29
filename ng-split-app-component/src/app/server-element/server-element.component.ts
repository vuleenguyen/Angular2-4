import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
    {
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string;

  @ViewChild('heading') header: ElementRef; //try to understand life cycle. This one can't use before view init
  @ContentChild('contentParagraph') content: ElementRef;

  constructor() {
    console.log("Constructor called");
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log("NgOnChange called")
    console.log(changes);
  }

  ngDoCheck() {
    console.log("Do Check called");
  }
  
  ngOnInit() {
    console.log("NgOnInit called");
    console.log("---------------This is value of -----header" + this.header.nativeElement.textContent);
    console.log("----------------------------This is vale of content" + this.content.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit call');
    console.log("----------------------------This is vale of content" + this.content.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked call');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit call');
    console.log("---------------This is value of -----header " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked call');
  
  }

  ngOnDestroy() {
    console.log('ngOnDestroyed call');
  }
}
