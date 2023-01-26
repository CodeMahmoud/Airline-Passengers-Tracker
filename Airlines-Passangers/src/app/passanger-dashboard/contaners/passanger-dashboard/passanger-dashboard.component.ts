import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passanger.interface";

@Component({
    selector: 'passanger-dashboard',
    styleUrls: ['passanger-dashboard.component.scss'],
    template: `
    <div >
      <passanger-count
      [items]="passengers">
      </passanger-count>
      <passanger-detail
      *ngFor="let passanger of passengers;"
      [detail]="passanger"
      >
      </passanger-detail>
    </div>
    `

})

export class PassengerDashboardComponent implements OnInit{
    passengers!: Passenger[];
    constructor() {}
    ngOnInit() {
      console.log('ngOnInit')
      this.passengers = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
      }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
      }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
      }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }];

    }


}
