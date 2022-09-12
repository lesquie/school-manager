import Skill from "../../model/Skill";

export class GetSkills {
    static readonly type = '[Skill] Get';
}

export class AddSkill {
    static readonly type = '[Skill] Add'
    constructor(public payload : Skill) {}
}

export class UpdateSkill {
    static readonly type = '[Skill] Update';
    constructor(public payload : Skill, public id : number) {}
}

export class DeleteSkill {
    static readonly type = '[Skill] Delete';
    constructor(public id : number) {}
}

export class SetSelectedSkill {
    static readonly type = '[Skill] Set';
    constructor(public payload : Skill) {}
}
