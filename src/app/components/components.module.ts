import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PostsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
