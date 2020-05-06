import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { ProjectTableComponent } from '../tables/project-table/project-table.component';

@NgModule({
  declarations: [ProjectComponent, ProjectTableComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
})
export class ProjectModule {}
