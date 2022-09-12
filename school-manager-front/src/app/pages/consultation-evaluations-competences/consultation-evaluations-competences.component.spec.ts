import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationEvaluationsCompetencesComponent } from './consultation-evaluations-competences.component';

describe('ConsultationEvaluationsCompetencesComponent', () => {
  let component: ConsultationEvaluationsCompetencesComponent;
  let fixture: ComponentFixture<ConsultationEvaluationsCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationEvaluationsCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationEvaluationsCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
