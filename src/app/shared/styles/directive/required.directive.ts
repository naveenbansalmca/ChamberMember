import { AfterViewInit, Directive, ElementRef } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[RequiredSign]'
})
export class RequiredDirective implements AfterViewInit{

  constructor(
    private el: ElementRef

  ) { }

  ngAfterViewInit(): void {
    $(this.el.nativeElement).append("<span class='required'>*</span>");
  }

}
