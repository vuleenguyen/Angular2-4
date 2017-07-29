import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCondition]'
})
export class ConditionDirective {
  @Input() set appCondition(condition: boolean) {
    if (condition) {
      this.viewComponentRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewComponentRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewComponentRef: ViewContainerRef) { }
}
