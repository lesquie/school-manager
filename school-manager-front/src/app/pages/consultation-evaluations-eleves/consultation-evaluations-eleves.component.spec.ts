import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationEvaluationsElevesComponent } from './consultation-evaluations-eleves.component';

describe('ConsultationEvaluationsElevesComponent', () => {
  let component: ConsultationEvaluationsElevesComponent;
  let fixture: ComponentFixture<ConsultationEvaluationsElevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationEvaluationsElevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationEvaluationsElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
