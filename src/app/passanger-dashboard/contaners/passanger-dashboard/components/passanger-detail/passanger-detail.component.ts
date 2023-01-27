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
          <div *ngIf="editing">
          <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
          </div>
          <div *ngIf="!editing">
            {{ detail.fullname }}
          </div>
        <div class="date">
          Check in date:
          {{ detail.checkInDate ? (detail.checkInDate | date: 'd MMMM y' | uppercase) : 'Not Checked in'}}
        </div>
        <div class="children">
          Children: {{ detail.children?.length || 0 }}
          <button (click)="toggleEdit()">{{editing? 'Done' : 'Edit'}}</button>
      </div>
    `
})
export class PassangerDetailComponent {
  @Input()
  detail!: Passenger;
  editing: boolean = false;
  constructor() {}
  onNameChange(value: string){
    this.detail.fullname = value
  }
  toggleEdit(){
    this.editing = !this.editing
  }

}
