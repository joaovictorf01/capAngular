import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormSignComponent } from './form-sign/form-sign.component';
import { CommonComponentsComponent } from './common-components/common-components.component';
import { MyInputComponent } from './common-components/my-input/my-input.component';
import { MySelectorComponent } from './common-components/my-selector/my-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormSignComponent,
    CommonComponentsComponent,
    MyInputComponent,
    MySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
