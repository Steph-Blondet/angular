// Always import the Component symbol from the Angular core library and annotate the component class with @Component.
import { Component, OnInit } from '@angular/core';
// Import the Hero model
import { Hero } from '../hero';

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
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // Lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  }

}
