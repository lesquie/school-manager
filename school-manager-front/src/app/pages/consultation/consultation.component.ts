import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import Skill from 'src/app/model/Skill';
import Student from 'src/app/model/Student';
import { SidenavService } from 'src/app/services/sidenav.service';
import { GetSkills, SetSelectedSkill } from 'src/app/store/actions/skill.action';
import { GetStudents, SetSelectedStudent } from 'src/app/store/actions/student.action';
import { SkillState } from 'src/app/store/states/skill.state';
import { StudentState } from 'src/app/store/states/student.state';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit, AfterViewInit {

  @Select(StudentState.getStudentList) students : Observable<Student[]>;
  @Select(SkillState.getSkillList) skills : Observable<Skill[]>;

  displayedColumnsStudent = ["familyName", "name"];

  displayedColumnsSkill = ["name"];

  selectedTab : number = 0; // 0 for student, 1 for skill

  @ViewChild('sideNav') sideNav : MatSidenav;

  constructor(private store : Store, private sidenavService : SidenavService) { }

  ngOnInit(): void {
    this.store.dispatch(new GetStudents());
    this.store.dispatch(new GetSkills());
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSideNav(this.sideNav);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedTab = tabChangeEvent.index;
  }

  consultStudentEvaluations(student : Student) {
    this.store.dispatch(new SetSelectedStudent(student));
    this.sideNav.open();
  }

  consultSkillEvaluations(skill : Skill) {
    this.store.dispatch(new SetSelectedSkill(skill));
    this.sideNav.open();
  }
}
