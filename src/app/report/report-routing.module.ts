import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { NewReportComponent } from './new-report/new-report.component';

const routes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'new', component: NewReportComponent },
  { path: 'general', component: ReportComponent },
  { path: 'rescues', component: ReportComponent },
  { path: 'incidents', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
