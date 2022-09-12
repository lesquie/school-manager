package com.fr.schoolmanager.evaluation;

import com.fr.schoolmanager.skills.Skill;
import com.fr.schoolmanager.skills.SkillNotFoundException;
import com.fr.schoolmanager.skills.SkillRepository;
import com.fr.schoolmanager.students.Student;
import com.fr.schoolmanager.students.StudentNotFoundException;
import com.fr.schoolmanager.students.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class EvaluationController {

    private EvaluationRepository evaluationRepository;
    private StudentRepository studentRepository;
    private SkillRepository skillRepository;

    public EvaluationController(EvaluationRepository evaluationRepository, StudentRepository studentRepository, SkillRepository skillRepository) {
        this.evaluationRepository = evaluationRepository;
        this.studentRepository = studentRepository;
        this.skillRepository = skillRepository;
    }

    @GetMapping("/evaluations")
    public List<Evaluation> all() {
        return evaluationRepository.findAll();
    }

    @GetMapping("/evaluation/{id}")
    public Evaluation one(@PathVariable Long id) {
        return evaluationRepository.findById(id).orElseThrow(() -> new EvaluationNotFoundException(id));
    }

    @GetMapping("/evaluations/student/{id}")
    public List<Consultation> getEvaluationsForStudent(@PathVariable Long id) {
        return  evaluationRepository.findAllByStudentId(id)
                .stream()
                .map(this::evaluationToConsultation)
                .collect(Collectors.toList());
    }

    @GetMapping("/evaluations/skill/{id}")
    public List<Consultation> getEvaluationsForSkill(@PathVariable Long id) {
        return evaluationRepository.findAllBySkillId(id)
                .stream()
                .map(this::evaluationToConsultation)
                .collect(Collectors.toList());
    }

    private Consultation evaluationToConsultation(Evaluation e) {
        Student s = studentRepository.findById(e.getStudentId()).orElseThrow(() -> new EvaluationNotFoundException(e.getStudentId()));
        Skill skill = skillRepository.findById(e.getSkillId()).orElseThrow(() -> new SkillNotFoundException(e.getSkillId()));
        return new Consultation(s.getName(), s.getFamilyName(), skill.getName(), e);
    }

    @PostMapping("/evaluate")
    public Evaluation evaluate(@RequestBody Evaluation evaluation) {
        Long studentId = evaluation.getStudentId();
        Long skillId = evaluation.getSkillId();

        studentRepository.findById(studentId).orElseThrow(() -> new StudentNotFoundException(studentId));
        skillRepository.findById(skillId).orElseThrow(() -> new SkillNotFoundException(skillId));

        return evaluationRepository.save(evaluation);
    }

}
