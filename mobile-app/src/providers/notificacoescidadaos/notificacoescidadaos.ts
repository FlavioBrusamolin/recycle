import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificacoescidadaosProvider {
  private API_URL = 'http://localhost:9000/v1/notificacoescidadaos'

  constructor(public http: Http) {}

  cadastrarNotificacoes(mensagem: string, data: string, hora: string, nome: string, telefone: number) {
    return new Promise((resolve, reject) => {
      var data1 = {
        mensagem: mensagem,
        data: data,
        hora: hora,
        nome: nome,
        telefone: telefone
      };

      this.http.post(this.API_URL, data1)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

}
