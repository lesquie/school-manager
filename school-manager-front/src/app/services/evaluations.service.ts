import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../app.config';
import Evaluation from '../model/Evaluation';
import Consultation from '../model/Consultation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  constructor(private httpClient : HttpClient) { }

  getAllEvaluations() : Observable<Evaluation[]> {
    return this.httpClient.get<Evaluation[]>(Config.server + "/evaluations");
  }

  getEvaluationsForStudent(studentId : number) : Observable<Consultation[]> {
    return this.httpClient.get<Consultation[]>(Config.server + '/evaluations/student/' + studentId);
  }

  getEvaluationsForSkill(skillId : number) : Observable<Consultation[]> {
    return this.httpClient.get<Consultation[]>(Config.server + '/evaluations/skill/' + skillId);
  }

}
