
import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../service/http/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseComponent} from "../base-component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent{
  email = '';
  pasword='';

  errorMessage: any;
  forgotPasswordClicked = false;
  user:any;
  constructor(private http: HttpClient ,httpService: HttpService,private router: Router, private  activatedRoute: ActivatedRoute) {
    super(httpService);
  }


  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.queryParams.id;

    this.user = {
      email: '',
      password: '',

    };
  }
  async login() {
    console.log('ddsfs');
    if (!this.email || !this.pasword) {

      return;
    }


    try {
      let loginResponse = await this.httpService.login(this.email, this.pasword);
      console.log(loginResponse);

      await this.router.navigateByUrl('/');
    } catch (e) {

      console.log('login error', e);
    }

  }

//register
  async register() {
    if (!this.email || !this.pasword) {

      return;
    }
    try {

      let registerResponse = await this.httpService.register(this.email, this.pasword);
      console.log(registerResponse);



      //await this.router.navigateByUrl('/');
    } catch (e) {
      console.log('register error', e);
    }

  }


}

