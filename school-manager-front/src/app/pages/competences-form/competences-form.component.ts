import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillState } from 'src/app/store/states/skill.state';
import { Observable, Subscription } from 'rxjs';
import Skill from 'src/app/model/Skill';
import { UpdateSkill, AddSkill, SetSelectedSkill } from 'src/app/store/actions/skill.action';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-competences-form',
  templateUrl: './competences-form.component.html',
  styleUrls: ['./competences-form.component.css']
})
export class CompetencesFormComponent implements OnInit, OnChanges {

  @Select(SkillState.getSelectedSkill) selectedSkill : Observable<Skill>;

  skillForm : FormGroup;

  @Input() action : boolean; // true for an update, false otherwise

  private formSubscription : Subscription = new Subscription();

  constructor(private fb : FormBuilder, private router : Router, private store : Store, private sidenavService : SidenavService) { 
    this.createForm();
  }
  
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.action) {
      this.formSubscription.add(  
        this.selectedSkill.subscribe(skill => {
          if(skill) {
            this.skillForm.patchValue({
              id : skill.id,
              name : skill.name,
            }); 
          }
        })
      );
    } else {
      this.clearForm();
    }
  }

  createForm() {
    this.skillForm = this.fb.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.action ? this.updateSkill() : this.addSkill()
  }

  addSkill() : void {
    this.formSubscription.add(
      this.store.dispatch(new AddSkill(this.skillForm.value)).subscribe(() => {
        this.clearAndClose();
      })
    );
  }

  updateSkill() : void {
    this.formSubscription.add(
      this.store.dispatch(new UpdateSkill(this.skillForm.value, this.skillForm.value.id)).subscribe(() => {
        this.clearAndClose();
      })
    );
  }

  back() {
    this.clearAndClose();
  }

  private clearAndClose() {
    this.clearForm();
    this.sidenavService.close();
  }

  clearForm() {
    this.skillForm.reset();
    this.store.dispatch(new SetSelectedSkill(null));
  }

}
