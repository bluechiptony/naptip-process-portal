import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuspectRoutingModule } from './suspect-routing.module';
import { SuspectComponent } from './suspect.component';


@NgModule({
  declarations: [SuspectComponent],
  imports: [
    CommonModule,
    SuspectRoutingModule
  ]
})
export class SuspectModule { }
