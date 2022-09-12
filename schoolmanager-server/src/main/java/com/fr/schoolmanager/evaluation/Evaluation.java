package com.fr.schoolmanager.evaluation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Evaluation {

    @Id @GeneratedValue
    private Long id;

    private Long studentId;

    private Long skillId;

    private EvaluationStatus status;

    private LocalDate evaluationDate;

    public Evaluation(Long studentId, Long skillId, EvaluationStatus status, LocalDate evaluationDate) {
        this.studentId = studentId;
        this.skillId = skillId;
        this.status = status;
        this.evaluationDate = evaluationDate;
    }
}
