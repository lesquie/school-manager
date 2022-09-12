import { State, Action, StateContext, Selector } from '@ngxs/store';
import Student from '../../model/Student';
import { ElevesService } from '../../services/eleves.service';
import { GetStudents, AddStudent, UpdateStudent, DeleteStudent, SetSelectedStudent, SetSelectedStudentsForEvaluation } from '../actions/student.action';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


export class StudentStateModel {
    students: Student[];
    selectedStudent: Student;
    selectedStudentsForEvaluation: Student[];
}

@State<StudentStateModel>({
    name: 'students',
    defaults: {
        students: [],
        selectedStudent: null,
        selectedStudentsForEvaluation: []
    }
})
@Injectable()
export class StudentState {

    constructor(private studentService : ElevesService) {
    }

    @Selector()
    static getStudentList(state : StudentStateModel) {
        return state.students;
    }

    @Selector()
    static getSelectedStudent(state : StudentStateModel) {
        return state.selectedStudent;
    }

    @Selector()
    static getSelectedStudentsForEvaluation(state : StudentStateModel) {
        return state.selectedStudentsForEvaluation;
    }

    @Action(GetStudents)
    getStudents({getState, setState}: StateContext<StudentStateModel>) {
        return this.studentService.getAllStudents().pipe(tap((result) => {
           const state = getState();
           setState({
               ...state,
               students: result
           });
        }));
    }

    @Action(SetSelectedStudent)
    setSelectedStudent({getState, setState} : StateContext<StudentStateModel>, {payload} : SetSelectedStudent) {
        const state = getState();
        setState({
            ...state,
            selectedStudent: payload
        })
    }

    @Action(SetSelectedStudentsForEvaluation)
    setSelectedStudentsForEvaluation({getState, setState} : StateContext<StudentStateModel>, {payload} : SetSelectedStudentsForEvaluation) {
        const state = getState();
        setState({
            ...state,
            selectedStudentsForEvaluation: payload
        })
    }

    @Action(AddStudent)
    addStudent({getState, patchState} : StateContext<StudentStateModel>, {payload} : AddStudent) {
        return this.studentService.addStudent(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                students: [...state.students, result]
            });
        }));
    }

    @Action(UpdateStudent)
    updateStudent({getState, setState} : StateContext<StudentStateModel>, {payload, id} : UpdateStudent) {
        return this.studentService.updateStudent(payload, id).pipe(tap((result) => {
            const state = getState();
            const studentList = [...state.students];
            const studentIndex = studentList.findIndex(s => s.id === id);
            studentList[studentIndex] = result;

            setState({
                ...state,
                students: studentList
            })

        }));
    }

    @Action(DeleteStudent)
    deleteStudent({getState, setState} : StateContext<StudentStateModel>, {id} : DeleteStudent) {
        return this.studentService.deleteStudent(id).pipe(tap((result) =>{
            const state = getState();
            const filteredStudentList = state.students.filter(s => s.id !== id);

            setState({
                ...state,
                students: filteredStudentList
            })
        }));
    }
}
