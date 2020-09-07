package com.fr.schoolmanager.evaluation;

public class EvaluationNotFoundException extends RuntimeException {

    public EvaluationNotFoundException(Long id) {
        super("Could not find Evaluation : " + id);
    }
}
