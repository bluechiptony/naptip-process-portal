import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from './user.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  users: User[] = [
    {
      code: 'VIC7234624',
      firstName: 'Mathew',
      lastName: 'Broderick',
      phoneNumber: '08039928872',
      sex: 'MALE',
      state: 'Kano',
      lga: 'Kano',
      dateCreated: new Date(1586982723000),
      emailAddress: 'email@email.com',
      command: 'ABUJA',
      department: 'Investigation and Monitoring',
    },
    {
      code: 'VIC8932928',
      firstName: 'Merryl',
      lastName: 'Streep',
      phoneNumber: '08039928872',
      state: 'Imo',
      lga: 'Owerri',
      dateCreated: new Date(957385923000),
      department: 'Finnance and accounts',
      sex: 'FEMALE',
      emailAddress: 'm.streep@email.com',
      command: 'KADUNA',
    },
    {
      code: 'VIC8932928',
      firstName: 'Margot',
      lastName: 'Robbie',
      phoneNumber: '08039928872',
      state: 'Benue',
      lga: 'Gboko',
      dateCreated: new Date(957385923000),
      department: 'Investigation and Monitoring',
      sex: 'FEMALE',
      emailAddress: 'mrobbie@email.com',
      command: 'ABUJA',
    },
  ];

  constructor(private http: HttpClient) {}

  getServices = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(this.users);
    });

    return ogs;
  };
}
