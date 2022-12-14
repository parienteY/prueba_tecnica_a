import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Entrada } from 'src/app/interfaces/Entrada.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  online: boolean = window.navigator.onLine;

  suscribe: any;

  EntradaUsuarios: Entrada = {
    titulo:"N° de usuarios",
    valor:0,
    icon:"people-outline"
  }
  EntradaPeticiones: Entrada = {
    titulo:"N° de posts",
    valor:0,
    icon:"podium-outline"
  }


  getUsuarios(){
    this.servicesServices.getUsers().subscribe((res) => {
      this.users = res;
      this.EntradaUsuarios.valor = res.length;
    });
  }

  getPosts(){
    this.servicesServices.getPosts().subscribe((res) => {
      this.EntradaPeticiones.valor = res;
    })
  }

  
  constructor(private servicesServices:ServicesService, private platform: Platform, private router: Router, private routerOutlet: IonRouterOutlet) {
    console.log(this.constructor.name);
      this.platform.backButton.subscribeWithPriority(-1, () => {
        if(!this.routerOutlet.canGoBack()){
            App.exitApp();
        }
      })
   }

  ngOnInit() {
    if(this.online){
      this.getUsuarios();
      this.getPosts();
    }
  }

}
