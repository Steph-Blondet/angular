import { Component, OnInit, Input } from '@angular/core';
// The HeroDetailComponent template binds to the component's hero property which is of type Hero
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // This is the only change you should make to the HeroDetailComponent class. There are no more properties. There's no presentation logic. This component simply receives a hero object through its hero property and displays it.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
