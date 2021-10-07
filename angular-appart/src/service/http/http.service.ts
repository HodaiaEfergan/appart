import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {isNullOrUndefined} from 'util';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // test2

  URL_TEST = 'http://localhost:3003/api/';
  // URL_LIVE = 'http://80.178.184.236:3001/api/';
  //URL_LIVE = 'https://set930.herokuapp.com/api/';


  baseUrl = this.URL_TEST;





  constructor(private http: HttpClient) {
    this.baseUrl = this.URL_TEST ;
  }

  // login
  login(email: string, password: string) {
    return this.http.post(this.baseUrl + 'login', {
      email,
      password
    }).toPromise();
  }

  //register
  register(email: string, password: string) {
    return this.http.post(this.baseUrl + 'register', {
      email,
      password
    }).toPromise();

  }





}
