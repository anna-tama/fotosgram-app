import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swiper from 'swiper';

import { register } from 'swiper/element/bundle'
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';

register();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal')
  swiperRef: ElementRef | undefined;
  slidePrincipal?: Swiper;

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

  loginUser = {
    email: 'erika@erika.com',
    password: 'erika123'
  }

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) return;

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password)

    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true })
    } else {

    }
  }

  registro(fRegistro: NgForm) {
    console.log('fRegistro.valid', fRegistro.valid);
  }

  seleccionarAvatar(avatar: any) {
    this.avatars.forEach(av => av.seleccionado = false  /*quito la selección de todos*/)
    avatar.seleccionado = true;
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  swiperReady() {
    this.slidePrincipal = this.swiperRef?.nativeElement.swiper;
  }
}
