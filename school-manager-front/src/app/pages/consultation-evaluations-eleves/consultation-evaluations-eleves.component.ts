import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import Student from 'src/app/model/Student';
import { SidenavService } from 'src/app/services/sidenav.service';
import { StudentState } from 'src/app/store/states/student.state';
import Consultation from 'src/app/model/Consultation';
import { EvaluationsService } from 'src/app/services/evaluations.service';

@Component({
  selector: 'app-consultation-evaluations-eleves',
  templateUrl: './consultation-evaluations-eleves.component.html',
  styleUrls: ['./consultation-evaluations-eleves.component.css']
})
export class ConsultationEvaluationsElevesComponent implements OnInit {

  @Select(StudentState.getSelectedStudent) selectedStudent : Observable<Student>;

  student : Student;

  studentEvaluations : Consultation[];

  displayedColumns = ['skillName', 'date', 'status'];

  constructor(private evaluationsService : EvaluationsService, private sidenavService : SidenavService) { }

  ngOnInit(): void {
    this.selectedStudent.subscribe((student) => {
      if(student) {
        this.student = student;
        this.evaluationsService.getEvaluationsForStudent(student.id).subscribe((evaluations) => {
          if(evaluations) {
            this.studentEvaluations = evaluations;
          }
        });
      }
    });
  }

  back() {
    this.sidenavService.close();
  }

}
