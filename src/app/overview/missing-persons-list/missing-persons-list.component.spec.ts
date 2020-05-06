import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonsListComponent } from './missing-persons-list.component';

describe('MissingPersonsListComponent', () => {
  let component: MissingPersonsListComponent;
  let fixture: ComponentFixture<MissingPersonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPersonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
