import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VictimRoutingModule } from './victim-routing.module';
import { VictimComponent } from './victim.component';


@NgModule({
  declarations: [VictimComponent],
  imports: [
    CommonModule,
    VictimRoutingModule
  ]
})
export class VictimModule { }
