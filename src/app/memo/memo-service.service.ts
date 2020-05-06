import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
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

  constructor(private http: HttpClient) {}

  getServices = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(this.assessments);
    });

    return ogs;
  };
}
