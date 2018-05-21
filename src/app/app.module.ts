import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires. This information is called metadata.
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule }    from '@angular/common/http';

// Add the HttpClientInMemoryWebApiModule to the @NgModule.imports array— after importing the HttpClient, —while configuring it with the InMemoryDataService.
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    // Then add FormsModule to the @NgModule metadata's imports array, which contains a list of external modules that the app needs
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
