import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSuspectTableComponent } from './case-suspect-table.component';

describe('CaseSuspectTableComponent', () => {
  let component: CaseSuspectTableComponent;
  let fixture: ComponentFixture<CaseSuspectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSuspectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSuspectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
