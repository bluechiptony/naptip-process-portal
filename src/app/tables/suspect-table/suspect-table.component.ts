import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuspectService } from 'src/app/suspect/suspect-service.service';

@Component({
  selector: 'app-suspect-table',
  templateUrl: './suspect-table.component.html',
  styleUrls: ['./suspect-table.component.scss'],
})
export class SuspectTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<any>;
  facilities: any[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private assessments: SuspectService) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchanys();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.facilities);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches facilities from remote
   */
  fetchanys = (): void => {
    this.loading = true;
    this.userSubscription = this.assessments.getServices().subscribe(
      (data: any[]) => {
        console.log(data);

        this.loading = false;
        this.hasError = false;
        this.addDispenanysToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds facilities to datasource
   */
  addDispenanysToDataSource = (facilities: any[]): void => {
    facilities.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };
}
