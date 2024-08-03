import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogRoutingModule } from './dog-routing.module';
import { DogComponent } from './dog/dog.component';



@NgModule({
  declarations: [
    DogComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule
  ]
})
export class DogsModule { }
