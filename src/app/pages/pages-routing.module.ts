import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path: "",
  children: [
    {
      path: "home",
      component: HomeComponent
    },
    {
      path: "user",
      component: UserComponent
    },
    {
      path: "**",
      redirectTo: "home"
    }
  ]
},
{
  path:"**",
  redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
