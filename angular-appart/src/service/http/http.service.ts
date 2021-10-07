import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // test2

  URL_TEST = 'http://localhost:3003/api/';


  baseUrl = this.URL_TEST;


  constructor(private http: HttpClient) {
    this.baseUrl = this.URL_TEST;
  }

  // login
  login(email: any, password: any) {
    return this.http.post(this.baseUrl + 'login', {
      email,
      password
    }).toPromise();
  }
}
