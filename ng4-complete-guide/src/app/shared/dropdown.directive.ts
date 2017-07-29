import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() defaultClass: string;
 
  @HostBinding('class') openClass: string;
  
  constructor() { }

  ngOnInit() {
    this.openClass = this.defaultClass;
  }

  @HostListener('click') onclick(eventData:Event) {
    if (this.openClass.indexOf('open') !== -1) {
      this.openClass = this.defaultClass;
    } else {
      this.openClass = this.openClass.concat(" open");
    }
  }

}
