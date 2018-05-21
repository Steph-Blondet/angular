// Always import the Component symbol from the Angular core library and annotate the component class with @Component.
import { Component, OnInit } from '@angular/core';
// Import the Hero model
import { Hero } from '../hero';
// Import the mock HEROES
// import { HEROES } from '../mock-heroes'
// Delete the HEROES import, because you won't need that anymore. Import the HeroService instead.
import { HeroService } from '../hero.service';


// Decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  // Add a hero property to the HeroesComponent for a hero named "Windstorm."
  // hero = "Windstorm";

  // Refactor the component's hero property to be of type Hero. Initialize it with an id of 1 and the name Windstorm.
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // Add a heroes property to the class that exposes these heroes for binding
  // heroes = HEROES;

  // Replace the definition of the heroes property with a simple declaration.
  heroes: Hero[];

  // Rename the component's hero property to selectedHero but don't assign it. There is no selected hero when the application starts.
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  // Lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
    this.getHeroes();
  }

  // Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // Create a function to retrieve the heroes from the service.
  // The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously. The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously.
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // The HeroService.getHeroes method used to return a Hero[]. Now it returns an Observable<Hero[]>. You'll have to adjust to that difference in HeroesComponent. Find the getHeroes method and replace it with the following code (shown side-by-side with the previous version for comparison)
  // The new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property. This asynchronous approach will work when the HeroService requests heroes from the server.
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
