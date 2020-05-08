import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseVictimTableComponent } from './case-victim-table.component';

describe('CaseVictimTableComponent', () => {
  let component: CaseVictimTableComponent;
  let fixture: ComponentFixture<CaseVictimTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseVictimTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseVictimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
