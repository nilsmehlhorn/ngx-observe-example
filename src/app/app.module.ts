import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxObserveDirective } from 'ngx-observe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxObserveDirective ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
