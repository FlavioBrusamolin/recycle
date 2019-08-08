import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MateriaisValidosProvider {
  private API_URL = 'http://localhost:9000/v1/materiaisvalidados'
  
  constructor(public http: Http) {}

  listarValidados(email: string) {
    return new Promise((resolve, reject) => {
      var user = {
        email:email
      };

      this.http.post(this.API_URL + '/user', user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  cadastrarValidados(tipo: string, quantidade: number, medida: string, email: string, nome: string, local: Array<any>) {
    return new Promise((resolve, reject) => {
      var data = {
        tipo: tipo,
        quantidade: quantidade,
        medida: medida,
        email: email,
        nome: nome,
        local: local,
        status: 'Aberto'
      };

      this.http.post(this.API_URL, data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }
}