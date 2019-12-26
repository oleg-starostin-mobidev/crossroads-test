import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommitsListComponent } from './commits-list/commits-list.component';
import { CommitItemComponent } from './commit-item/commit-item.component';

import {GithubService} from "./core/github.service";
import { httpInterceptorProviders } from './http-interceptors';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitsListComponent,
    CommitItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    GithubService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
