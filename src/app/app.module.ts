import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './profile/background/background.component';
import { ImagesComponent } from './profile/images/images.component';
import { BodyContentComponent } from './profile/body-content/body-content.component';
import { IconsComponent } from './profile/icons/icons.component';
import { EndCardComponent } from './profile/end-card/end-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ImagesComponent,
    BodyContentComponent,
    IconsComponent,
    EndCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
