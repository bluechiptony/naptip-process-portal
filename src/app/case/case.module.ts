import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { CaseTableComponent } from '../tables/case-table/case-table.component';
import { CaseTypesComponent } from './case-types/case-types.component';
import { CaseService } from './case-service.service';

@NgModule({
  declarations: [CaseComponent, CaseTableComponent, CaseTypesComponent],
  imports: [
    CommonModule,
    CaseRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [CaseService],
})
export class CaseModule {}
