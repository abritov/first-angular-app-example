import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAnimalContainer]'
})
export class AnimalContainerDirective {

  constructor(public readonly viewContainerRef: ViewContainerRef) { }

}
