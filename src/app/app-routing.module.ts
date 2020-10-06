import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinaryToDecimalConverterComponent } from './binary-to-decimal-converter/binary-to-decimal-converter.component';
import { SeagameComponent } from './seagame/seagame.component';


const routes: Routes = [
  { path: 'binary-to-decimal-converter-component', component: BinaryToDecimalConverterComponent },
  { path: 'seagame-component', component: SeagameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
