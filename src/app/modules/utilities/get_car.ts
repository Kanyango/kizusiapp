import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Headers, Http } from '@angular/http';

import { Car, Price } from './car_model';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'get_car_component',
    templateUrl: './get_car.html'
})

export class GetCarComponent {
  
  location: any;
  public cars: Array<any> = [];
  public carsUrl = 'https://kizusiadmin.herokuapp.com/car';

  constructor(private http: Http)
    {
     this.getCars();
   }


  getCars(): Promise<any>
  {
    return this.http.get(this.carsUrl)
                .toPromise()
                .then(res => { this.cars = res.json(); console.log(this.cars)})
                .catch(this.handleError);
  }
    private handleError(error: any): Promise<any>
     {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}
