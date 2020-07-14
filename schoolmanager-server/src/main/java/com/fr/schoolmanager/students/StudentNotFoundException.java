package com.fr.schoolmanager.students;

public class StudentNotFoundException extends RuntimeException {
    public StudentNotFoundException(Long id) {
        super("Could not find student : " + id);
    }
}
