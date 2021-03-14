import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinerequestComponent } from './onlinerequest.component';

describe('OnlinerequestComponent', () => {
  let component: OnlinerequestComponent;
  let fixture: ComponentFixture<OnlinerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinerequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
