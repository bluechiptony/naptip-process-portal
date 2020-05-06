import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectListComponent } from './suspect-list.component';

describe('SuspectListComponent', () => {
  let component: SuspectListComponent;
  let fixture: ComponentFixture<SuspectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
