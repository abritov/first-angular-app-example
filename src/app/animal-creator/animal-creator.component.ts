import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnimalCreatorService } from './animal-creator.service';

@Component({
  selector: 'app-animal-creator',
  templateUrl: './animal-creator.component.html',
  styleUrls: ['./animal-creator.component.scss']
})
export class AnimalCreatorComponent {
  createAnimalForm = this.fb.group({
    animalType: [null, Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly animalCreator: AnimalCreatorService) {}

  onSubmit(): void {
    this.animalCreator.createAnimal(this.createAnimalForm.value.animalType);
  }
}
