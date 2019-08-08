import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosProvider {
  private API_URL = 'http://localhost:9000/v1/usuariosapp'
  public emailglobal:string = "";
  public nomeglobal:string = "";
  public pontosglobal:string = "";
  public telefoneglobal:number = 0;
  public controleglobal:number = 0;
  public localglobal:Array<any>;
  
  constructor(public http: Http) {}

  cadastrarUsuario(nome: string, email: string, cpf: number, telefone: number, senha: string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        senha: senha,
        pontuacao: 0
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

  entrar(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      var auth = {
        email: email,
        senha: senha
      };

      this.http.post(this.API_URL + '/auth', auth)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  buscarNomePontos(email: string) {
    return new Promise((resolve, reject) => {
      var user = {
        email: email
      };

      this.http.post(this.API_URL + '/buscar', user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  listarUsuarios() {
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
