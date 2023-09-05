import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];
  habilitado: boolean = true;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.siguientes();
  }

  recargar(event: any) {
    this.siguientes(event, true) //si pull es true, mando a recargar. O sea purgo los posts y los dejo en vacío
    this.habilitado = true;
    this.posts = [];
  }

  siguientes(event?: any, pull: boolean = false) {
    this.postsService.getPosts(pull)
      .subscribe(resp => {
        console.log('posts', resp)
        this.posts.push(...resp.posts)

        if (event) {
          event.target.complete();

          if (resp.posts.length === 0) {
            this.habilitado = false;
          }
        }
      })
  }

}
