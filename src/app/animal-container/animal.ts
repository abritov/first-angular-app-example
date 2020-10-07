import { Type } from '@angular/core';
import { Animal } from '../animal-creator/animals';

export class AnimalItem {
  constructor(public component: Type<any>, public readonly animal: Animal) {}
}
