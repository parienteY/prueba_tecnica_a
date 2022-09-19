import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/interfaces/albums.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  id: number = 0;
  posts: number = 0;
  albums: Album[] = [];
  user: User;
  constructor(private serviceService: ServicesService, private router: Router) { }

  getPosts(id: number){
    this.serviceService.getPostUser(id).subscribe(res => {
      this.posts = res;
    });
  }


  getAlbums(id: number){
    this.serviceService.getAlbumsUser(id).subscribe(res => {
      this.albums = res;
    })
  }
  ngOnInit() {
      const navigation = this.router.getCurrentNavigation();
      let objeto = navigation.extras.state as User;
      this.user = objeto;
      this.getAlbums(objeto.id);
      this.getPosts(objeto.id);
    
  }

}
