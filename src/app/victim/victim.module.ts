import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VictimRoutingModule } from './victim-routing.module';
import { VictimComponent } from './victim.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { VictimTableComponent } from '../tables/victim-table/victim-table.component';
import { VictimService } from './victim-service.service';

@NgModule({
  declarations: [VictimComponent, VictimTableComponent],
  imports: [
    CommonModule,
    VictimRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [],
})
export class VictimModule {}

export enum VictimStatus {
  MISSING = 'MISSING',
  IN_CUSTUDY = 'IN CUSTODY',
  OUT_OF_CUSTODY = 'OUR OF CUSTODY',
  DECEASED = 'DECEASED',
  HOSPITALIZED = 'HOSPITALIZED',
}

export interface Victim {
  code: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  sex: string;
  dob: Date;
  state: string;
  lga: string;
  dateCreated: Date;
  status: VictimStatus;
}
