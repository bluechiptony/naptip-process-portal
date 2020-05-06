import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuspectComponent } from './suspect.component';

const routes: Routes = [{ path: '', component: SuspectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuspectRoutingModule { }
