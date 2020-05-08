import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Organization } from './organization.module';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  organizations: Organization[] = [
    {
      code: 'BHS3824',
      name: 'Lagos zonal Office',
      state: 'LAGOS',
      lga: 'ETI OSA',
      contactPhone: '08037443389',
      emailAddress: 'lagos@naptip.gov.ng',
    },
    {
      code: 'NPT3824',
      name: 'FCT Zonal Office',
      state: 'Federal capital territory',
      lga: 'ETI OSA',
      contactPhone: '08037443389',
      emailAddress: 'fct@naptip.gov.ng',
    },
    {
      code: 'N382403',
      name: 'Port Hacourt zonal office',
      state: 'Rivers',
      lga: 'Port harcourt',
      contactPhone: '08037443389',
      emailAddress: 'phc@naptip.gov.ng',
    },
  ];

  constructor(private http: HttpClient) {}

  getServices = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(this.organizations);
    });

    return ogs;
  };
}
