import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../app.config';
import { Observable } from 'rxjs';
import Student from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {

  constructor(private http : HttpClient) { }

  getAllStudents() : Observable<Student[]> {
    return this.http.get<Student[]>(Config.server + "/students");
  }

  addStudent(student: Student) {
    return this.http.post<Student>(Config.server + "/student", student);
  }

  updateStudent(updatedStudent : Student, id : number) {
    return this.http.put<Student>(Config.server + "/student/" + id, updatedStudent);
  }

  deleteStudent(id : number) {
    return this.http.delete(Config.server + '/student/' + id);
  }

}
