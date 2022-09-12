import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Skill from '../model/Skill';
import { Observable } from 'rxjs';
import { Config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(private http : HttpClient) { }

  getAllSkills() : Observable<Skill[]> {
    return this.http.get<Skill[]>(Config.server + '/skills');
  }

  addSkill(newSkill : Skill) {
    return this.http.post<Skill>(Config.server + '/skill', newSkill);
  }

  updateSkill(updatedSkill : Skill, id : number) {
    return this.http.put<Skill>(Config.server + '/skill/' + id, updatedSkill);
  }

  deleteSkill(id : number) {
    return this.http.delete(Config.server + '/skill/' + id);
  }


}
