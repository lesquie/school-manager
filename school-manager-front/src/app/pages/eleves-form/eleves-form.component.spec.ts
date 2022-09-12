import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevesFormComponent } from './eleves-form.component';

describe('ElevesFormComponent', () => {
  let component: ElevesFormComponent;
  let fixture: ComponentFixture<ElevesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
