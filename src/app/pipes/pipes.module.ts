import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitPipe } from './limit.pipe';



@NgModule({
  declarations: [LimitPipe],
  imports: [
    CommonModule
  ],
  exports:[LimitPipe]
})
export class PipesModule { }
