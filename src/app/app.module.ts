import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsService } from './user-details.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserDetailsService,
    UserListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
