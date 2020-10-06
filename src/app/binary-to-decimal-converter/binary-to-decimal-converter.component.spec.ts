import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryToDecimalConverterComponent } from './binary-to-decimal-converter.component';

describe('BinaryToDecimalConverterComponent', () => {
  let component: BinaryToDecimalConverterComponent;
  let fixture: ComponentFixture<BinaryToDecimalConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryToDecimalConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryToDecimalConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
