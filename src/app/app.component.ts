import { Component } from '@angular/core';
import { PassengerDashboardComponent } from './passanger-dashboard/contaners/passanger-dashboard/passanger-dashboard.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <passanger-dashboard></passanger-dashboard>
  </div>
  `
})
export class AppComponent {

}
