import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[Resaltado]'
})
export class ResaltadoDirective {

  constructor(
    el:ElementRef
  ) {
el.nativeElement.style.background="aqua"
   }

}
