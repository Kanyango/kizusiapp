
import { Component } from '@angular/core';

@Component({
    selector: 'hotel-booking-component',
    templateUrl: 'hotel.html'
})

export class HotelBookingComponent {
    firstDayOfWeek: number = 0;
    mode: string = 'date';
    start_date: string = '';
    end_date: string = '';
    
}
