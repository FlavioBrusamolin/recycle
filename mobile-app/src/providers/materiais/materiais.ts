import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MateriaisProvider {
  private API_URL = 'http://localhost:9000/v1/materiais'

  constructor(public http: Http) {}

  listar() {
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

  /*buscar(tipo: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + tipo)
        .subscribe((result: any) => {
          return resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }*/
}
