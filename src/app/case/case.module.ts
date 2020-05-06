import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { CaseTableComponent } from '../tables/case-table/case-table.component';

@NgModule({
  declarations: [CaseComponent, CaseTableComponent],
  imports: [
    CommonModule,
    CaseRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
})
export class CaseModule {}
