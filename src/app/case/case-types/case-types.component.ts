import { Component, OnInit } from '@angular/core';
import { CaseTypes } from '../case.module';

@Component({
  selector: 'app-case-types',
  templateUrl: './case-types.component.html',
  styleUrls: ['./case-types.component.scss'],
})
export class CaseTypesComponent implements OnInit {
  caseTypes: any[] = Object.keys(CaseTypes);

  constructor() {}

  ngOnInit(): void {
    this.caseTypes = this.caseTypes.map((casef: string) => {
      return casef.replace('_', ' ');
    });
  }
}
