import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../animal-creator/animals';

@Component({
  selector: 'app-animal-container',
  templateUrl: './animal-container.component.html',
  styleUrls: ['./animal-container.component.scss']
})
export class AnimalContainerComponent implements OnInit {
  @Input() animal: Animal;
  constructor() { }

  ngOnInit(): void {

  }
}
