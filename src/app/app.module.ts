import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { MyFilmsComponent } from './my-films/my-films.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMusicComponent,
    MyFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }