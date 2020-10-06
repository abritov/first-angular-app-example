import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BinaryToDecimalConverterDto } from './binary-to-decimal-converter.dto';

@Injectable({ providedIn: 'root' })
export class BinaryToDecimalConverterService {
  constructor(private readonly httpClient: HttpClient) { }

  convert(input: number): Observable<BinaryToDecimalConverterDto> {
    return this.httpClient.get<BinaryToDecimalConverterDto>(`http://localhost:3000/decimal?number=${input}`);
  }
}
