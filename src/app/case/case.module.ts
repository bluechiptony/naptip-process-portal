import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { CaseTableComponent } from '../tables/case-table/case-table.component';
import { CaseTypesComponent } from './case-types/case-types.component';
import { CaseService } from './case-service.service';
import { NewCaseComponent } from './new-case/new-case.component';
import { CaseCategoryComponent } from './case-category/case-category.component';
import { CaseFileComponent } from './case-file/case-file.component';
import { Suspect } from '../suspect/suspect.module';
import { Victim, VictimStatus } from '../victim/victim.module';
import { VictimTableComponent } from '../tables/victim-table/victim-table.component';
import { SuspectTableComponent } from '../tables/suspect-table/suspect-table.component';
import { VictimService } from '../victim/victim-service.service';
import { SuspectService } from '../suspect/suspect-service.service';
import { ReportService } from '../report/report-service.service';
import { ReportTableComponent } from '../tables/report-table/report-table.component';
import { UserService } from '../user/user-service.service';
import { CaseSuspectTableComponent } from './case-suspect-table/case-suspect-table.component';
import { CaseVictimTableComponent } from './case-victim-table/case-victim-table.component';
import { CaseReportTableComponent } from './case-report-table/case-report-table.component';

@NgModule({
  declarations: [
    CaseComponent,
    CaseTableComponent,
    CaseTypesComponent,
    NewCaseComponent,
    CaseCategoryComponent,
    CaseFileComponent,
    CaseSuspectTableComponent,
    CaseVictimTableComponent,
    CaseReportTableComponent,
  ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [CaseService, UserService],
})
export class CaseModule {}

export enum CaseTypes {
  KIDNAPPING = 'KIDNAPPIING',
  DOCUMENT_FORGERY = 'DOCUMENT FORGERY',
  SEXUAL_ABUSE = 'SEXUAL ABUSE',
  CHILD_ABUSE = 'CHILD ABUSE',
  WANDERING = 'WANDERING',
  MISSING_CHILD = 'MISSING CHILD',
  RAPE = 'RAPE',
  RECRUITMENT_FOR_PORNOGRAPHY = 'RECRUITMENT FOR PORNOGRAPHY',
}

export enum CaseStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export interface Case {
  code: string;
  title: string;
  caseType: CaseTypes;
  dateCreated: Date;
  suspects: Suspect[];
  victims: Victim[];
  caseStatus: CaseStatus;
  assignment: string;
}
