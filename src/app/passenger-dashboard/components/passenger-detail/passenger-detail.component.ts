import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges} from "@angular/core";
import { Passenger } from "src/app/passenger-dashboard/models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
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
          {{ detail.checkInDate ? (detail.checkInDate | date: 'MMMM d y' | uppercase) : 'Not Checked in'}}
        </div>
        <div class="children">
          Children: {{ detail.children?.length || 0 }}
          <button (click)="toggleEdit()">{{editing? 'Done' : 'Edit'}}</button>
          <button (click)="onRemove()"></button>
            Remove
      </div>
    `
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail!: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: any) {
    if(changes.detail){

      this.detail = Object.assign({}, changes.detail.currentValue)
    }

  }
  onNameChange(value: string){
    this.detail.fullname = value
  }
  editing: boolean = false;

  toggleEdit() {
    if(this.editing){
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing
  }

  onRemove() {
    this.remove.emit(this.detail)
  }

}
