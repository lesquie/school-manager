package com.fr.schoolmanager.evaluation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

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

    private Date evaluationDate;

}
