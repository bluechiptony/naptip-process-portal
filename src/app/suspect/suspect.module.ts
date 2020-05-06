import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuspectRoutingModule } from './suspect-routing.module';
import { SuspectComponent } from './suspect.component';
import { SuspectTableComponent } from '../tables/suspect-table/suspect-table.component';


@NgModule({
  declarations: [SuspectComponent, SuspectTableComponent],
  imports: [
    CommonModule,
    SuspectRoutingModule
  ]
})
export class SuspectModule { }
