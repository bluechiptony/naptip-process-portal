import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { ReportTableComponent } from '../tables/report-table/report-table.component';
import { ReportService } from './report-service.service';
import { NewReportComponent } from './new-report/new-report.component';

@NgModule({
  declarations: [ReportComponent, ReportTableComponent, NewReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [],
})
export class ReportModule {}

export interface Report {
  code: string;
  title: string;
  caseNumber: string;
  author: string;
  reportType: string;
  dateCreated: string;
}
