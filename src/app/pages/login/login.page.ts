import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swiper from 'swiper';

import { register } from 'swiper/element/bundle'
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui-service.service';
import { Usuario } from 'src/app/interfaces/interfaces';

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


  loginUser = {
    email: 'erika@erika.com',
    password: 'erika123'
  }

  registerUser: Usuario = {
    email: 'lala@lala.com',
    password: 'lala123',
    nombre: 'Lala',
    avatar: 'av-1.png'
  }

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiService
  ) { }

  ngOnInit() {

  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) return;

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password)

    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true })
    } else {
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos')
    }
  }

 async  registro(fRegistro: NgForm) {
    if (fRegistro.invalid) return;

    const valido = await this.usuarioService.registro(this.registerUser)
    console.log('valido',valido)

    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true })
    } else {
      this.uiService.alertaInformativa('Ese correo electrónico ya existe')
    }
    console.log('fRegistro.valid', fRegistro.valid);
  }


  swiperSlideChanged(e: any) {
   // console.log('changed: ', e);
  }

  swiperReady() {
    this.slidePrincipal = this.swiperRef?.nativeElement.swiper;
  }


}
