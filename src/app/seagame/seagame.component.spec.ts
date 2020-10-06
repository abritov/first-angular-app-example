import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeagameComponent } from './seagame.component';

describe('SeagameComponent', () => {
  let component: SeagameComponent;
  let fixture: ComponentFixture<SeagameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeagameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeagameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
