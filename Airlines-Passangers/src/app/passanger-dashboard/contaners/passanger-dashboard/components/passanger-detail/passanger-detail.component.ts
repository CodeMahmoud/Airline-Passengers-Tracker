import { Component, Input} from "@angular/core";
import { Passenger } from "src/app/passanger-dashboard/models/passanger.interface";

@Component({
    selector: 'passanger-detail',
    styleUrls: ['passanger-detail.component.scss'],
    template:`
      <div>
        <ul>
          <span
          class="status"
          [class.checked-in]="detail.checkedIn"></span>
        {{ detail.fullname }}
        <div class="date">
          Check in date:
          {{ detail.checkInDate ? (detail.checkInDate | date: 'd MMMM y' | uppercase) : 'Not Checked in'}}
        </div>
        <div class="children">
          Children: {{ detail.children?.length || 0 }}
      </div>
    `
})
export class PassangerDetailComponent {
  @Input()
  detail!: Passenger;
  constructor() {}

}
