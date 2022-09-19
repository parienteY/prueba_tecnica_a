import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ComponentsModule } from '../components/components.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HomeComponent, UserComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    IonicModule.forRoot(),
  ],
  exports: [HomeComponent, UserComponent]
})
export class PagesModule { }
