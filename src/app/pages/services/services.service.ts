import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/posts.interface';
import { User } from 'src/app/interfaces/user.interface';
import {environment} from "../../../environments/environment";
import { map } from 'rxjs/operators';
import { Album } from 'src/app/interfaces/albums.interface';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(environment.API_URL+"users");
  }

  getPosts(){
    return this.http.get<Post[]>(environment.API_URL+"posts")
    .pipe(
      map((posts: Post[]) => 
        {
          return posts.length
        }
      )
    )
  }

  getPostUser(id:number){
    return this.http.get<Post[]>(environment.API_URL+"users/"+id+"/posts")
    .pipe(
      map((posts: Post[]) => {
        return posts.length
      })
    );
  }

  getAlbumsUser(id: number){
    return this.http.get<Album[]>(environment.API_URL+"users/"+id+"/albums");
  }
}
