import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavbarComponentExample } from './modules/navbar/nav';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule }   from './app-routing.module';
import { HomeComponent }   from './modules/home/home';
import { FooterComponent }   from './modules/footer/footer';
import { AgmCoreModule } from '@agm/core';
import { AboutComponent } from './modules/about/about';
import { ServicesComponent } from './modules/services/services';
import { CarsComponent } from './modules/cars/cars';
import { NgxCarouselModule } from 'ngx-carousel';
import { ContactComponent } from './modules/contact/contact';
import { GetCarComponent } from './modules/utilities/get_car';
import { CarDetailsComponent } from './modules/cars/car_details';
import { ToursComponent } from './modules/hustles/tours';
import { TravelComponent } from './modules/hustles/travel';
import { HotelComponent } from './modules/hustles/hotel';
import { GraphicComponent } from './modules/hustles/graphic';
import { FashionComponent } from './modules/hustles/fashion';
import { AlumComponent } from './modules/hustles/alum';
import { DriversComponent } from './modules/hustles/drivers';
import { VideoComponent } from './modules/hustles/video';
import { EventComponent } from './modules/hustles/event';
import { ConfirmationComponent } from './modules/cars/confirmation';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponentExample,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    CarsComponent,
    ContactComponent,
    GetCarComponent,
    CarDetailsComponent,
    ToursComponent,
    HotelComponent,
    TravelComponent,
    GraphicComponent,
    FashionComponent,
    AlumComponent,
    DriversComponent,
    VideoComponent,
    EventComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsuGIJdVor_CBVRJ7Qffm7iEFJecVAHHk'
    }),
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
