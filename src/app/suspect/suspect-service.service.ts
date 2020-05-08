import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Suspect, SuspectStatus } from './suspect.module';

@Injectable({
  providedIn: 'root',
})
export class SuspectService {
  assessments: any[] = [];

  suspects: Suspect[] = [
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
  ];

  constructor(private http: HttpClient) {}

  getServices = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(this.suspects);
    });

    return ogs;
  };
}
