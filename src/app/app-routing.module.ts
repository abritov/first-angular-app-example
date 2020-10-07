import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinaryToDecimalConverterComponent } from './binary-to-decimal-converter/binary-to-decimal-converter.component';


const routes: Routes = [
  { path: 'test1', component: BinaryToDecimalConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
