import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimTableComponent } from './victim-table.component';

describe('VictimTableComponent', () => {
  let component: VictimTableComponent;
  let fixture: ComponentFixture<VictimTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictimTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
