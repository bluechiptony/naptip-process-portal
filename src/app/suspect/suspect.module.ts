import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuspectRoutingModule } from './suspect-routing.module';
import { SuspectComponent } from './suspect.component';
import { SuspectTableComponent } from '../tables/suspect-table/suspect-table.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SuspectService } from './suspect-service.service';
import { CaseTypes } from '../case/case.module';

@NgModule({
  declarations: [SuspectComponent, SuspectTableComponent],
  imports: [
    CommonModule,
    SuspectRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [],
})
export class SuspectModule {}

export enum SuspectStatus {
  IN_CUSTODY = 'IN CUSTODY',
  AT_LARGE = 'AT LARGE',
}

export interface Suspect {
  code: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  sex: string;
  dob: Date;
  state: string;
  lga: string;
  dateCreated: Date;
  caseType?: CaseTypes;
  status: SuspectStatus;
}
