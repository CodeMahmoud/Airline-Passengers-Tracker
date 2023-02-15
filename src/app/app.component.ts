import { Component } from '@angular/core';
import { PassengerDashboardComponent } from './passenger-dashboard/contaners/passenger-dashboard/passenger-dashboard.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <passenger-dashboard></passenger-dashboard>
  </div>
  `
})
export class AppComponent {

}
