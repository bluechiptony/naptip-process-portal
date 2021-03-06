import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { UserTableComponent } from '../tables/user-table/user-table.component';
import { UserService } from './user-service.service';

@NgModule({
  declarations: [UserComponent, UserTableComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
  providers: [UserService],
})
export class UserModule {}

export interface User {
  code: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  sex: string;
  command: string;
  department: string;
  state: string;
  lga: string;
  dateCreated: Date;
}
