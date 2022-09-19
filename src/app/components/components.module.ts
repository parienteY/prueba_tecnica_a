import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardUserComponent } from './card-user/card-user.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [CardComponent, CardUserComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [CardComponent, CardUserComponent, SpinnerComponent]
})
export class ComponentsModule { }
