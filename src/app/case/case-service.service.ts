import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Case, CaseTypes, CaseStatus } from './case.module';
import { SuspectStatus } from '../suspect/suspect.module';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  assessments: any[] = [];

  cases: Case[] = [
    {
      code: 'WU732482',
      title: 'Illegal recruitment case against Organization',
      caseType: CaseTypes.RECRUITMENT_FOR_PORNOGRAPHY,
      dateCreated: new Date(),
      suspects: [
        {
          code: 'VIC8932928',
          firstName: 'Bode',
          lastName: 'Thomas',
          phoneNumber: '08039928872',
          state: 'Imo',
          lga: 'Owerri',
          dateCreated: new Date(957385923000),
          status: SuspectStatus.IN_CUSTODY,
          sex: 'MALE',
          dob: new Date(1050438723000),
        },
      ],
      victims: [],
      caseStatus: CaseStatus.OPEN,
      assignment: 'James Gandolfi',
    },
  ];

  constructor(private http: HttpClient) {}

  getServices = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(this.cases);
    });

    return ogs;
  };
}
