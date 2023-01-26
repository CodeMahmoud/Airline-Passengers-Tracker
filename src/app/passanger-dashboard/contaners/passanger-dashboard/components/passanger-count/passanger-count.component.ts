import { Component, Input } from "@angular/core";

import { Passenger } from "src/app/passanger-dashboard/models/passanger.interface";

@Component({
    selector:'passanger-count',
    template:`
    <div>
        <h3>Airline Passangers Tracker</h3>
      Total Checked in Passangers: {{ checkedInCount() }}/{{ items.length }}
    </div>
    `

})

export class PassangerCountComponent {
    @Input()
    items: Passenger[] = [];
    checkedInCount(){
        if (!this.items) return;
        return this.items.filter((passanger: Passenger) => {
           return passanger.checkedIn
        }).length
    }
    constructor() {}
}
