import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires. This information is called metadata.
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    // Then add FormsModule to the @NgModule metadata's imports array, which contains a list of external modules that the app needs
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
