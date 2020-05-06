import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuspectRoutingModule } from './suspect-routing.module';
import { SuspectComponent } from './suspect.component';
import { SuspectTableComponent } from '../tables/suspect-table/suspect-table.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SuspectService } from './suspect-service.service';

@NgModule({
  declarations: [SuspectComponent, SuspectTableComponent],
  imports: [
    CommonModule,
    SuspectRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [SuspectService],
})
export class SuspectModule {}
