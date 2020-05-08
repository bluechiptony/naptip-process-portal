import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseComponent } from './case.component';
import { CaseTypesComponent } from './case-types/case-types.component';
import { NewCaseComponent } from './new-case/new-case.component';
import { CaseFileComponent } from './case-file/case-file.component';

const routes: Routes = [
  { path: '', component: CaseComponent },
  { path: 'new', component: NewCaseComponent },
  { path: 'case/:code', component: CaseFileComponent },
  { path: 'list', component: CaseComponent },
  { path: 'categories', component: CaseTypesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseRoutingModule {}
