import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import Student from 'src/app/model/Student';
import { Select, Store, UpdateState } from '@ngxs/store';
import { StudentState } from 'src/app/store/states/student.state';
import { Observable, Subscription } from 'rxjs';
import { AddStudent, UpdateStudent, SetSelectedStudent } from 'src/app/store/actions/student.action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-eleves-form',
  templateUrl: './eleves-form.component.html',
  styleUrls: ['./eleves-form.component.css']
})
export class ElevesFormComponent implements OnInit, OnChanges {

  @Select(StudentState.getSelectedStudent) selectedStudent : Observable<Student>;

  studentForm : FormGroup;

  @Input() action : boolean; // true for an update, false otherwise

  private formSubscription : Subscription = new Subscription();

  constructor(private fb : FormBuilder, private router : Router, private store : Store, private sidenavService : SidenavService) {
    this.createForm();
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.action) {
      this.formSubscription.add(
        this.selectedStudent.subscribe(student => {
          if(student) {
            this.studentForm.patchValue({
              id : student.id,
              name : student.name,
              familyName : student.familyName,
              birthDate : student.birthDate,
              email : student.email,
              legalResponsibleOne : student.legalResponsibleOne,
              legalResponsibleTwo : student.legalResponsibleTwo
            });
          }
        })
      );
    }else{
      this.clearForm();
    } 
  }

  createForm() {
    this.studentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.required],
      legalResponsibleOne: ['', Validators.required],
      legalResponsibleTwo: ['']
    });
  }

  onSubmit() {
    this.action ? this.updateStudent() : this.addStudent();
  }

  addStudent() {
    this.formSubscription.add(
      this.store.dispatch(new AddStudent(this.studentForm.value)).subscribe(() => {
        this.clearAndClose();
      })
    );   
  }

  updateStudent() {
    this.formSubscription.add(
      this.store.dispatch(new UpdateStudent(this.studentForm.value, this.studentForm.value.id)).subscribe(() => {
        this.clearAndClose();
      })
    );
  }

  clearAndClose() {
    this.clearForm();
    this.back();
  }

  back() {
    this.sidenavService.close();
  }

  clearForm() {
    this.studentForm.reset();
    this.store.dispatch(new SetSelectedStudent(null));
  }


}
