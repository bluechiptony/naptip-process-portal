import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { PeopleOverviewComponent } from './people-overview/people-overview.component';
import { CasesOverviewComponent } from './cases-overview/cases-overview.component';
import { CaseChartComponent } from './case-chart/case-chart.component';
import { MissingPersonsListComponent } from './missing-persons-list/missing-persons-list.component';
import { SuspectListComponent } from './suspect-list/suspect-list.component';
import { MemoListComponent } from './memo-list/memo-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    OverviewComponent,
    PeopleOverviewComponent,
    CasesOverviewComponent,
    CaseChartComponent,
    MissingPersonsListComponent,
    SuspectListComponent,
    MemoListComponent,
  ],
  imports: [CommonModule, OverviewRoutingModule, NgxChartsModule],
})
export class OverviewModule {}
