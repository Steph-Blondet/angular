import { Injectable } from '@angular/core';
// The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source. Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They don't know how the service works.
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// Observable is one of the key classes in the RxJS library.
import { Observable, of } from 'rxjs';
// Import the MessageService
import { MessageService } from './message.service';


// The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
@Injectable({
  // When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // Replace the getHeroes method with this one.
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  // Modify the getHeroes method to send a message when the heroes are fetched
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
