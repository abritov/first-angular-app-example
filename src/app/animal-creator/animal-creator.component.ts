import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnimalCreatorService } from './animal-creator.service';
import { AnimalContainerDirective } from '../animal-container/animal-container.directive';
import { AnimalContainerComponent } from '../animal-container/animal-container.component';

@Component({
  selector: 'app-animal-creator',
  templateUrl: './animal-creator.component.html',
  styleUrls: ['./animal-creator.component.scss']
})
export class AnimalCreatorComponent {
  @ViewChild(AnimalContainerDirective, { static: true }) appAnimalContainer: AnimalContainerDirective;
  createAnimalForm = this.fb.group({
    animalType: [null, Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly animalCreator: AnimalCreatorService) {}

  onSubmit(): void {
    const animalItem = this.animalCreator.createAnimal(this.createAnimalForm.value.animalType);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(animalItem.component);
    const viewContainerRef = this.appAnimalContainer.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AnimalContainerComponent>(componentFactory);
    componentRef.instance.animal = animalItem.animal;
  }
}
