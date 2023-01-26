import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// Containers
import { PassengerDashboardComponent } from "./contaners/passanger-dashboard/passanger-dashboard.component";

// Components
import { PassangerCountComponent } from "./contaners/passanger-dashboard/components/passanger-count/passanger-count.component";
import { PassangerDetailComponent } from "./contaners/passanger-dashboard/components/passanger-detail/passanger-detail.component";

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassangerCountComponent,
        PassangerDetailComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PassengerDashboardComponent
    ]
})

export class PassengerDashboardModule {}
