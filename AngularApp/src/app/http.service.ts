import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) {

  }


  getPlayers() {
    return this.http.get('http://localhost:3000/players')
      .map(response => response.json());
    ;

  }


  addPlayer(player) {
    let body = JSON.stringify(player);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/players', body, options)
      .map(response => response.json())
      .subscribe(response => console.log(response));
  }
}
