import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle'

register();

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  public url = environment.url;

  @Input() post: Post = {};

  img1 = '/assets/perro-1.jpg';
  img2 = '/assets/perro-2.jpg';
  img3 = '/assets/perro-3.jpg';


  constructor() { }

  ngOnInit() { }

}
