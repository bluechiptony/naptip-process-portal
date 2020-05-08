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
      revenueHead: 'Returns',
      mdaName: 'Ministry of Lands and survey',
      taxpayer: 'General Memo',
      total: 'ACTIVE',
      balance: 23434,
      dateIssued: 1587583768000,
    },
    {
      id: 72483,
      invoiceNumber: '632436473',
      revenueHead: 'Notice',
      mdaName: 'Ministry of Lands and survey',
      taxpayer: 'Procefure implementation',
      total: 'ACTIVE',
      balance: 23434,
      dateIssued: 1587583768000,
    },
    {
      id: 72483,
      invoiceNumber: '632436473',
      revenueHead: 'Report Submission',
      mdaName: 'Ministry of Lands and survey',
      taxpayer: 'Executive notice',
      total: 'ACTIVE',
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
