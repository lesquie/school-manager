import Evaluation from "./Evaluation";

export default interface Consultation {
    studentName : string;
    studentFamilyName : string;
    skillName : string;

    evaluation : Evaluation;
}