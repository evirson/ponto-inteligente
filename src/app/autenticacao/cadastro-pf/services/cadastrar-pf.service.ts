import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

import { CadastroPf } from '../models';


@Injectable({
  providedIn: 'root'
})

export class CadastrarPfService {

  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient, ) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPf);
  }
}
