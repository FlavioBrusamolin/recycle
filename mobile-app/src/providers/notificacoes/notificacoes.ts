import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the NotificacoesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificacoesProvider {
  private API_URL = 'http://localhost:9000/v1/notificacoes'

  constructor(public http: Http) {}

  listarNotificacoes() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL)
        .subscribe((result: any) => {
          return resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

}
