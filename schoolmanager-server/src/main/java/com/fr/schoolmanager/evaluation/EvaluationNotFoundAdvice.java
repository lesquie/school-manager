package com.fr.schoolmanager.evaluation;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class EvaluationNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(EvaluationNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String studentNotFoundHandler(EvaluationNotFoundException exception) {
        return exception.getMessage();
    }


}
