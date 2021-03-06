import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoRoutingModule } from './memo-routing.module';
import { MemoComponent } from './memo.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { MemoTableComponent } from '../tables/memo-table/memo-table.component';
import { MemoService } from './memo-service.service';

@NgModule({
  declarations: [MemoComponent, MemoTableComponent],
  imports: [
    CommonModule,
    MemoRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [MemoService],
})
export class MemoModule {}
