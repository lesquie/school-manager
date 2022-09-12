import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import Skill from '../../model/Skill';
import { CompetencesService } from '../../services/competences.service';
import { GetSkills, AddSkill, UpdateSkill, DeleteSkill, SetSelectedSkill } from '../actions/skill.action';

export class SkillStateModel {
    skills : Skill[];
    selectedSkill : Skill;
}

@State<SkillStateModel> ({
    name : 'skills',
    defaults: {
        skills : [],
        selectedSkill: null
    }
})
@Injectable()
export class SkillState {

    constructor(private skillService : CompetencesService) {}

    @Selector()
    static getSkillList(state : SkillStateModel) {
        return state.skills;
    }

    @Selector()
    static getSelectedSkill(state : SkillStateModel) {
        return state.selectedSkill;
    }

    @Action(GetSkills)
    getSkills({getState, setState} : StateContext<SkillStateModel>) {
        return this.skillService.getAllSkills().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                skills: result
            })
        }));
    }

    @Action(SetSelectedSkill)
    setSelectedSkill({getState, setState} : StateContext<SkillStateModel>, { payload } : SetSelectedSkill) {
        const state = getState();
        setState({
            ...state,
            selectedSkill : payload
        })
    }

    @Action(AddSkill)
    addSkill({getState, patchState} : StateContext<SkillStateModel>, { payload } : AddSkill) {
        return this.skillService.addSkill(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                skills: [...state.skills, result]
            })
        }));
    }

    @Action(UpdateSkill)
    updateSkill({getState, setState} : StateContext<SkillStateModel>, {payload, id} : UpdateSkill) {
        return this.skillService.updateSkill(payload, id).pipe(tap((result) => {
            const state = getState();
            const skillList = [...state.skills];
            const index = skillList.findIndex(skill => skill.id === id);
            skillList[index] = result;

            setState({
                ...state,
                skills: skillList
            })
        }));
    }

    @Action(DeleteSkill)
    deleteSkill({getState, setState} : StateContext<SkillStateModel>, { id } : DeleteSkill) {
        return this.skillService.deleteSkill(id).pipe(tap(result => {
            const state = getState();
            const filteredSkills = state.skills.filter(skill => skill.id !== id);

            setState({
                ...state,
                skills: filteredSkills
            })
        }));
    }

}