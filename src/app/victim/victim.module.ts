import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VictimRoutingModule } from './victim-routing.module';
import { VictimComponent } from './victim.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { VictimTableComponent } from '../tables/victim-table/victim-table.component';

@NgModule({
  declarations: [VictimComponent, VictimTableComponent],
  imports: [
    CommonModule,
    VictimRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
})
export class VictimModule {}
