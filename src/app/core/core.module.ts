import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'build/openapi';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule
  ]
})
export class CoreModule { }
