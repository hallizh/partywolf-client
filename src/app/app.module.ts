import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {MatButtonModule, MatInputModule} from '@angular/material';
import { CreateJoinComponent } from './create-join/create-join.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NarratorComponent } from './narrator/narrator.component';
import { PartywolfComponent } from './partywolf/partywolf.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateJoinComponent,
    NarratorComponent,
    PartywolfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
