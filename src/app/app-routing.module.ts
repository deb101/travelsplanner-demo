import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceComponent } from './components/place/place.component';
import { HomeComponent } from './pages/home/home.component';
import { AddPlacesComponent } from './components/add-places/add-places.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'place', component: PlaceComponent },
  { path: 'add-places', component: AddPlacesComponent }
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
