import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SkillState } from '../../store/states/skill.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import Skill from 'src/app/model/Skill';
import { Router } from '@angular/router';
import { GetSkills, DeleteSkill, SetSelectedSkill } from 'src/app/store/actions/skill.action';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit, AfterViewInit {

  @Select(SkillState.getSkillList) skills : Observable<Skill[]>;

  displayedColumns : String[] = ["name", "deleteCol"];

  @ViewChild('sideNav') sideNav : MatSidenav;

  actionType : boolean; // true for an update, false otherwise

  constructor(private router : Router, private store : Store, private sidenavService : SidenavService) { }

  ngOnInit(): void {
    this.store.dispatch(new GetSkills());
  }

  ngAfterViewInit() : void {
    this.sidenavService.setSideNav(this.sideNav);
  }

  openAddForm() {
    this.actionType = false;
    this.sideNav.open();
  }

  openUpdateForm(skill : Skill) {
    this.actionType = true;
    this.store.dispatch(new SetSelectedSkill(skill));
    this.sideNav.toggle();
  }

  deleteSkill(skillId : number) {
    this.store.dispatch(new DeleteSkill(skillId));
  }

}
