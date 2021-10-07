import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../service/http/http.service';
import {BaseComponent} from "../base-component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {
  email: any;
  password: any;
  user: { email: string; password: string; } | undefined;




  constructor(httpService: HttpService,private router: Router, private  activatedRoute: ActivatedRoute, private location: Location) {

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
    let loginResponse = await this.httpService.login(this.email, this.password);
    console.log(loginResponse);

  }


}
