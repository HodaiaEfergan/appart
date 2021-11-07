// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import { HttpClientModule } from '@angular/common/http';
// import { YesNoDialogComponent } from './components/dialogs/yes-no-dialog/yes-no-dialog.component';
// import { OkDialogComponent } from './components/dialogs/ok-dialog/ok-dialog.component';
// import {MatDialogModule} from '@angular/material/dialog';
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {OkDialogComponent} from './components/dialogs/ok-dialog/ok-dialog.component';
import {YesNoDialogComponent} from './components/dialogs/yes-no-dialog/yes-no-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './components/main/main.component';


// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    YesNoDialogComponent,
    OkDialogComponent,
    SearchComponent,
    MainComponent,

  ],
  entryComponents: [
    YesNoDialogComponent,
    OkDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],

  providers: [HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
