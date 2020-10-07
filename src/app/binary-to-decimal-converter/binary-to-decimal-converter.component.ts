import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BinaryToDecimalConverterService } from './binary-to-decimal-converter.service';

@Component({
  selector: 'app-binary-to-decimal-converter',
  templateUrl: './binary-to-decimal-converter.component.html',
  styleUrls: ['./binary-to-decimal-converter.component.scss']
})
export class BinaryToDecimalConverterComponent {
  askNumberForm = this.fb.group({
    binaryNumber: [null, Validators.compose([
      Validators.required, Validators.pattern('[01]+')])
    ],
  });

  constructor(
      private readonly fb: FormBuilder,
      private readonly converter: BinaryToDecimalConverterService,
    ) {}

  onSubmit(): void {
    if (this.askNumberForm.controls.binaryNumber.errors) {
      alert('invalid number');
      return;
    }
    const input = this.askNumberForm.value.binaryNumber;
    this.converter.convert(input).subscribe(result => {
      if (result.err) {
        alert(`Error ${result.err}`);
      } else {
        alert(`Decimal number for ${input} is ${result.data.decimal}`);
      }
    });
  }
}
