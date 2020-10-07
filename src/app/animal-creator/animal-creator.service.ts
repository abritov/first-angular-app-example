import { Injectable } from '@angular/core';
import { AnimalItem } from '../animal-container/animal';
import { AnimalContainerComponent } from '../animal-container/animal-container.component';
import { Shark, Turtle, Jellyfish, Starfish } from './animals';

@Injectable({ providedIn: 'root' })
export class AnimalCreatorService {
  createAnimal(animalType: string): AnimalItem {
    switch (animalType) {
      case 'shark':
        return new AnimalItem(AnimalContainerComponent, new Shark());
      case 'turtle':
        return new AnimalItem(AnimalContainerComponent, new Turtle());
      case 'jellyfish':
        return new AnimalItem(AnimalContainerComponent, new Jellyfish());
      case 'starfish':
        return new AnimalItem(AnimalContainerComponent, new Starfish());
      default:
        throw Error('unknown animal type');
    }
  }
}
