import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';


import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, BannerComponent, FooterComponent, ContactusComponent
  ],
  imports: [
    BrowserModule, OwlModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
