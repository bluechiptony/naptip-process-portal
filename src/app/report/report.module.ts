import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { ReportTableComponent } from '../tables/report-table/report-table.component';
import { ReportService } from './report-service.service';

@NgModule({
  declarations: [ReportComponent, ReportTableComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [ReportService],
})
export class ReportModule {}
