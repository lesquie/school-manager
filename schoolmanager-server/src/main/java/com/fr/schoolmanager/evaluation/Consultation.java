package com.fr.schoolmanager.evaluation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
/**
 * Wrapper class for an evaluation
 */
public class Consultation {

    private String studentName;
    private String studentFamilyName;
    private String skillName;

    private Evaluation evaluation;
}
