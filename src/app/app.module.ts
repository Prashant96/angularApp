import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyContainterComponent } from './myContainer/myContainer';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Textsec1Component } from './myContainer/textsec1/textsec1.component';
import { Textsec2Component } from './myContainer/textsec2/textsec2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyContainterComponent,
    TopnavComponent,
    HeaderComponent,
    Textsec1Component,
    Textsec2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
