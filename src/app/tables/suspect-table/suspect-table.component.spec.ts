import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectTableComponent } from './suspect-table.component';

describe('SuspectTableComponent', () => {
  let component: SuspectTableComponent;
  let fixture: ComponentFixture<SuspectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
