import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { OrganizationTableComponent } from '../tables/organization-table/organization-table.component';
import { OrganizationService } from './organization-service.service';

@NgModule({
  declarations: [OrganizationComponent, OrganizationTableComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [OrganizationService],
})
export class OrganizationModule {}
