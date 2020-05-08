import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseReportTableComponent } from './case-report-table.component';

describe('CaseReportTableComponent', () => {
  let component: CaseReportTableComponent;
  let fixture: ComponentFixture<CaseReportTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseReportTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
