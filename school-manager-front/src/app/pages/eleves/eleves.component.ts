import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Student from 'src/app/model/Student';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StudentState } from 'src/app/store/states/student.state';
import { GetStudents, SetSelectedStudent, DeleteStudent } from 'src/app/store/actions/student.action';
import { MatSidenav, ɵangular_material_src_material_sidenav_sidenav_a } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit, AfterViewInit {

  @Select(StudentState.getStudentList) students : Observable<Student[]> ;

  displayedColumns = ["familyName", "name", "birthDate", "email", "legalResponsibleOne", "legalResponsibleTwo", "deleteCol"];

  @ViewChild('sideNav') sideNav : MatSidenav;

  actionType : boolean; // true for an update, false otherwise

  isLoading : Boolean = true;
  error : Boolean = false;

  constructor(private store : Store, private sidenavService : SidenavService) { }

  ngOnInit(): void {
    this.store.dispatch(new GetStudents());
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSideNav(this.sideNav);
  }

  addStudent() {
    this.actionType = false;
    this.sideNav.open();
  }

  updateStudent(studentToModify : Student) {
    this.actionType = true;
    this.store.dispatch(new SetSelectedStudent(studentToModify));
    this.sideNav.open();
  }

  deleteStudent(id : number) {
    this.store.dispatch(new DeleteStudent(id));
  }

}
