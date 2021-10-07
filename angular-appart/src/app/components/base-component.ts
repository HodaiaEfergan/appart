import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../service/http/http.service";


@Component({
  template: ''
})
export abstract class BaseComponent implements OnInit {


//
  protected constructor(public httpService: HttpService) {

  }


  ngOnInit(): void {
  }


  loadData() {

  }

  /********   sorting mechanism  ***********/

}
