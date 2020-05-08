import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reports: any[] = [
    {
      code: 'MSI83248',
      title: 'Report on activity',
      caseNumber: 'TY3247323',
      author: 'James Igondo',
      reportType: 'ACTIVITY',
      dateCreated: new Date(),
    },
    {
      code: 'MSI83948',
      title: 'Report of Incidence',
      caseNumber: 'TY3247323',
      author: 'Merryl Streep',
      reportType: 'INCIDENT',
      dateCreated: new Date(),
    },
  ];

  constructor(private http: HttpClient) {}

  getServices = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(this.reports);
    });

    return ogs;
  };
}
