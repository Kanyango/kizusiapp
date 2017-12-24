import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home';
import { ServicesComponent } from './modules/services/services';
import { AboutComponent } from './modules/about/about';
import { CarsComponent } from './modules/cars/cars';
import { ContactComponent } from './modules/contact/contact';
import { CarDetailsComponent } from './modules/cars/car_details';
import { ConfirmationComponent } from './modules/cars/confirmation';
import { RentYourCarComponent } from './modules/rent_car/rent_car';

const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent},
        { path: 'about', component: AboutComponent},
        { path: 'services', component: ServicesComponent},
        { path: 'cars', component: CarsComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'car_detail/:id', component: CarDetailsComponent},
        { path: 'thankyou', component: ConfirmationComponent},
        { path: 'rent_car', component: RentYourCarComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
