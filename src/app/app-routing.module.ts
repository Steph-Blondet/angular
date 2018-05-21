// An Angular best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule. By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app folder.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import the HeroesComponent so you can reference it in a Route. 
import { HeroesComponent } from './heroes/heroes.component';
// Import the DashboardComponent in the AppRoutingModule
import { DashboardComponent }   from './dashboard/dashboard.component';
// A URL like ~/detail/11 would be a good URL for navigating to the Hero Detail view of the hero whose id is 11. Open AppRoutingModule and import HeroDetailComponent.
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


// Then define an array of routes with a single route to that component.
const routes: Routes = [
  // When the app starts, the browsers address bar points to the web site's root. That doesn't match any existing route so the router doesn't navigate anywhere. The space below the <router-outlet> is blank. This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'. After the browser refreshes, the router loads the DashboardComponent and the browser address bar shows the /dashboard URL.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Add a parameterized route to the AppRoutingModule.routes array that matches the path pattern to the hero detail view. The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent }  
];

@NgModule({
  exports: [ RouterModule ],
  // Add RouterModule to the @NgModule.imports array and configure it with the routes in one step by calling RouterModule.forRoot() within the imports array, like this:
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}


