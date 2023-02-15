import { Component, Input } from "@angular/core";

import { Passenger } from "src/app/passenger-dashboard/models/passenger.interface";

@Component({
    selector:'passenger-count',
    template:`
    <div>
        <h3>Airline passengers Tracker</h3>
      Total Checked in passengers: {{ checkedInCount() }}/{{ items.length }}
    </div>
    `

})

export class PassengerCountComponent {
    @Input()
    items: Passenger[] = [];
    checkedInCount(){
        if (!this.items) return;
        return this.items.filter((passenger: Passenger) => {
           return passenger.checkedIn
        }).length
    }
    constructor() {}
}
