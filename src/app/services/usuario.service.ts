import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = '';

  constructor(
    private storage: Storage,
    private http: HttpClient) { }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  login(email: string, password: string) {
    const data = { email, password }
    this.http.post(`${URL}/user/login`, data)
      .subscribe(resp => {
        console.log(resp)
      })
  }

}
