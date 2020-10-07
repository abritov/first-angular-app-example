import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BinaryToDecimalConverterComponent } from './binary-to-decimal-converter/binary-to-decimal-converter.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnimalCreatorComponent } from './animal-creator/animal-creator.component';
import { AnimalContainerComponent } from './animal-container/animal-container.component';
import { AnimalContainerDirective } from './animal-container/animal-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    BinaryToDecimalConverterComponent,
    AnimalCreatorComponent,
    AnimalContainerComponent,
    AnimalContainerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
