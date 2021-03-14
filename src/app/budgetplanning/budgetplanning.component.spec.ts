import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetplanningComponent } from './budgetplanning.component';

describe('BudgetplanningComponent', () => {
  let component: BudgetplanningComponent;
  let fixture: ComponentFixture<BudgetplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
