import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Victim, VictimStatus } from './victim.module';

@Injectable({
  providedIn: 'root',
})
export class VictimService {
  assessments: any[] = [
    {
      id: 72483,
      invoiceNumber: '632436473',
      revenueHead: 'Black Tax',
      mdaName: 'Ministry of Lands and survey',
      taxpayer: 'Hames Rodriguez',
      total: 21334723,
      balance: 23434,
      dateIssued: 1587583768000,
    },
    {
      id: 72483,
      invoiceNumber: '632436473',
      revenueHead: 'Black Tax',
      mdaName: 'Ministry of Lands and survey',
      taxpayer: 'Hames Rodriguez',
      total: 21334723,
      balance: 23434,
      dateIssued: 1587583768000,
    },
    {
      id: 72483,
      invoiceNumber: '632436473',
      revenueHead: 'Black Tax',
      mdaName: 'Ministry of Lands and survey',
      taxpayer: 'Hames Rodriguez',
      total: 21334723,
      balance: 23434,
      dateIssued: 1587583768000,
    },
  ];

  victims: Victim[] = [
    {
      code: 'VIC7234624',
      firstName: 'Magnus',
      lastName: 'Okon',
      phoneNumber: '08039928872',
      state: 'Kano',
      lga: 'Kano',
      dateCreated: new Date(1586982723000),
      status: VictimStatus.OUT_OF_CUSTODY,
      sex: 'MALE',
      dob: new Date(957385923000),
    },
    {
      code: 'VIC8932928',
      firstName: 'Amaka',
      lastName: 'Igwe',
      phoneNumber: '08039928872',
      state: 'Imo',
      lga: 'Owerri',
      dateCreated: new Date(957385923000),
      status: VictimStatus.IN_CUSTUDY,
      sex: 'FEMALE',
      dob: new Date(1050438723000),
    },
    {
      code: 'VIC8932928',
      firstName: 'August',
      lastName: 'Cherryfield',
      phoneNumber: '08039928872',
      state: 'Benue',
      lga: 'Gboko',
      dateCreated: new Date(957385923000),
      status: VictimStatus.OUT_OF_CUSTODY,
      sex: 'FEMALE',
      dob: new Date(1050438723000),
    },
  ];

  constructor(private http: HttpClient) {}

  getServices = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(this.victims);
    });

    return ogs;
  };
}
