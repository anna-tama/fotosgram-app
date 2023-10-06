import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent  implements OnInit {

  @Output() avatartSel = new EventEmitter<string>();

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  constructor() { }

  ngOnInit() {}
  
  seleccionarAvatar(avatar: any) {
    this.avatars.forEach(av => av.seleccionado = false  /*quito la selección de todos*/)
    avatar.seleccionado = true;
    console.log('avatar.img',avatar.img)
    this.avatartSel.emit(avatar.img)
  }
}
