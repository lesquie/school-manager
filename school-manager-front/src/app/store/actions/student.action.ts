import Student from "../../model/Student";

export class AddStudent {
    static readonly type = '[Student] Add'
    constructor(public payload : Student) {}
}

export class GetStudents {
    static readonly type = '[Student] Get';
}

export class UpdateStudent {
    static readonly type = '[Student] Update';
    constructor(public payload : Student, public id : number) {}
}

export class DeleteStudent {
    static readonly type = '[Student] Delete';
    constructor(public id : number) {}
}

export class SetSelectedStudent {
    static readonly type = '[Student] Set';
    constructor(public payload : Student) {}
}

export class SetSelectedStudentsForEvaluation {
    static readonly type = '[Student] Set for evaluation';
    constructor(public payload : Student[]) {}
}