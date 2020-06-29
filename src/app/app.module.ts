import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardamomComponent } from './products/spices/cardamom/cardamom.component';
import { EnquireComponent } from './enquire/enquire.component';
import { GingerComponent } from './products/spices/ginger/ginger.component';

@NgModule({
  declarations: [
    AppComponent,
    CardamomComponent,
    EnquireComponent,
    GingerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
