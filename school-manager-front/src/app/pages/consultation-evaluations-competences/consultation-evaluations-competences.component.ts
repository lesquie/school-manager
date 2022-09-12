import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import Consultation from 'src/app/model/Consultation';
import Skill from 'src/app/model/Skill';
import { EvaluationsService } from 'src/app/services/evaluations.service';
import { SidenavService } from 'src/app/services/sidenav.service';
import { SkillState } from 'src/app/store/states/skill.state';

@Component({
  selector: 'app-consultation-evaluations-competences',
  templateUrl: './consultation-evaluations-competences.component.html',
  styleUrls: ['./consultation-evaluations-competences.component.css']
})
export class ConsultationEvaluationsCompetencesComponent implements OnInit {

  @Select(SkillState.getSelectedSkill) selectedSkill : Observable<Skill>;

  skill : Skill;

  skillEvaluations : Consultation[];

  displayedColumns = ['eleves', 'date', 'status'];

  constructor(private sidenavService : SidenavService, private evaluationService : EvaluationsService) { }

  ngOnInit(): void {
    this.selectedSkill.subscribe((skill) => {
      if(skill) {
        this.skill = skill;
        this.evaluationService.getEvaluationsForSkill(skill.id).subscribe(skillEvaluations => {
          this.skillEvaluations = skillEvaluations;
        });
      }
    });
  }

  back() {
    this.sidenavService.close();
  }
}
