import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardUserComponent } from './card-user/card-user.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [CardComponent, CardUserComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardComponent, CardUserComponent, SpinnerComponent]
})
export class ComponentsModule { }
