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
import { TurmericComponent } from './products/spices/turmeric/turmeric.component';
import { CorianderComponent } from './products/spices/coriander/coriander.component';
import { FenugreekSeedsComponent } from './products/spices/fenugreek-seeds/fenugreek-seeds.component';
import { LinseedsComponent } from './products/spices/linseeds/linseeds.component';
import { NigellaSeedsComponent } from './products/spices/nigella-seeds/nigella-seeds.component';
import { SesameSeedsComponent } from './products/spices/sesame-seeds/sesame-seeds.component';
import { SunflowerSeedsComponent } from './products/spices/sunflower-seeds/sunflower-seeds.component';

@NgModule({
  declarations: [
    AppComponent,
    CardamomComponent,
    EnquireComponent,
    GingerComponent,
    TurmericComponent,
    CorianderComponent,
    FenugreekSeedsComponent,
    LinseedsComponent,
    NigellaSeedsComponent,
    SesameSeedsComponent,
    SunflowerSeedsComponent
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
