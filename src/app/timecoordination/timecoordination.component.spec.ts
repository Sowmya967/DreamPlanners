import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecoordinationComponent } from './timecoordination.component';

describe('TimecoordinationComponent', () => {
  let component: TimecoordinationComponent;
  let fixture: ComponentFixture<TimecoordinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecoordinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
