import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () =>
          import('../overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: 'cases',
        loadChildren: () =>
          import('../case/case.module').then((m) => m.CaseModule),
      },
      {
        path: 'victims',
        loadChildren: () =>
          import('../victim/victim.module').then((m) => m.VictimModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../report/report.module').then((m) => m.ReportModule),
      },
      {
        path: 'suspects',
        loadChildren: () =>
          import('../suspect/suspect.module').then((m) => m.SuspectModule),
      },
      {
        path: 'memos',
        loadChildren: () =>
          import('../memo/memo.module').then((m) => m.MemoModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'organizations',
        loadChildren: () =>
          import('../organization/organization.module').then(
            (m) => m.OrganizationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
