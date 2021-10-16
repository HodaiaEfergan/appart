
import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../service/http/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseComponent} from "../base-component";
import {HttpClient} from "@angular/common/http";
import {DialogService} from "../../../service/dialog/dialog.service";

@Component({
  selector: 'app-test',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent{
  email = '';
  password = '';

  errorMessage: any;
  forgotPasswordClicked = false;
  user:any;
  constructor(private http: HttpClient ,httpService: HttpService,private router: Router, private  activatedRoute: ActivatedRoute, private  dialogService: DialogService) {
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
    if (!this.email || !this.password) {
      await this.dialogService.showOkDialog("please enter email and password");
      return;
    }


    try {
      let loginResponse = await this.httpService.login(this.email, this.password);
      console.log(loginResponse);

      await this.router.navigateByUrl('/');
    } catch (e) {
      await this.dialogService.showOkDialog("user not found");
      console.log('login error', e);
    }

  }

//register
  async register() {
    if (!this.email || !this.password) {
      await this.dialogService.showOkDialog("please enter email and password");
      return;
    }
    try {


      let registerResponse = await this.httpService.register(this.email, this.password);
      console.log(this.email);
      console.log(this.password);
      console.log(registerResponse);
      await this.router.navigateByUrl('/');
      await this.dialogService.showOkDialog("user saved");
    } catch (e) {
      console.log('register error', e);
    }

  }


}

