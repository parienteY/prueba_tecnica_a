import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() user: User;
  
  changeView(){
    const user : NavigationExtras = { state: this.user};
    this.router.navigate(["/user"], user)
  }
  constructor(private router: Router) { }

  ngOnInit() {}

}
