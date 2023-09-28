import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = '';

  private _storage: Storage | null = null;

  constructor(private storage: Storage,
    private http: HttpClient) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  login(email: string, password: string) {
    const data = { email, password }
    return new Promise(resolve => {
      this.http.post(`${URL}/user/login`, data)
        .subscribe((resp: any) => {
          console.log(resp)

          if (resp['ok']) {
            this.guardarToken(resp['token'])
            resolve(true);
          } else {
            this.token = '';
            this.storage.clear();
            resolve(false);
          }
        })
    })
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.set('token', token)
  }

  registro(usuario: Usuario) {
    return new Promise(resolve => {
      this.http.post(`${URL}/user/create`, usuario)
        .subscribe((resp: any) => {
          if (resp['ok']) {
            this.guardarToken(resp['token'])
            resolve(true);
          } else {
            this.token = '';
            this.storage.clear();
            resolve(false);
          }
        })
    })
  }

}
