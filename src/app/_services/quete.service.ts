import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import'rxjs/add/operator/toPromise';

@Injectable()
export class QueteService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Get all posts from the API

  getQuetes() {
    console.log('in quetes service');
    return this.http.get('/api/quete/')
              .map(response => response.json());
  }

  viewQuete(numero) {
    console.log('in quete service' + numero);
    return this.http.get('/api/quete/'+numero)
              .map(response => response.json());
  }

  private handleError(error:any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}