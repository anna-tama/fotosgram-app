import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle'

register();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public url = environment.url;


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

  ngOnInit() {
  }

  login(fLogin: NgForm) {
    console.log('fLogin.valid', fLogin.valid);
  }

  registro(fRegistro: NgForm) {
    console.log('fRegistro.valid', fRegistro.valid);
  }

  seleccionarAvatar(avatar: any) {
    this.avatars.forEach(av => av.seleccionado = false  /*quito la selección de todos*/ )
    avatar.seleccionado = true;
  }

}
