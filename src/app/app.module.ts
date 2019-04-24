import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaceComponent } from './components/place/place.component';
import { HomeComponent } from './pages/home/home.component';
import { AddPlacesComponent } from './components/add-places/add-places.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent,
    PlaceComponent,
    HomeComponent,
    AddPlacesComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
