import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VictimComponent } from './victim.component';

const routes: Routes = [{ path: '', component: VictimComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VictimRoutingModule { }
