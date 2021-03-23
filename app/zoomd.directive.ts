import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomd]'
})
export class ZoomdDirective {

  @HostBinding('style.color') color: string;
  @HostBinding('style.zoom') zoom: string;

  constructor(private elementRef: ElementRef) {
    // this.color='white'; 


  }

  @HostListener('mouseover') onMouseOver() {
    this.color = 'brown';
    this.elementRef.nativeElement.style.zoom = '100%';



  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'blue';

    this.elementRef.nativeElement.style.zoom = '100%';


  }

}
