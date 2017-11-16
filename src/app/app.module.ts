import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NarratorComponent } from './narrator/narrator.component';
import { CreateJoinComponent } from './create-join/create-join.component';
import { PartywolfComponent } from './partywolf/partywolf.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateJoinComponent,
    NarratorComponent,
    PartywolfComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
