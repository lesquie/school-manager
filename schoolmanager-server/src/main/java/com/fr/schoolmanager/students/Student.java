package com.fr.schoolmanager.students;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "STUDENTS")
public class Student {

    @Id @GeneratedValue
    private Long id;

    private String name;

    private String familyName;

    private LocalDate birthDate;

    private String email;

    private String legalResponsibleOne;

    private String legalResponsibleTwo;

    public Student(String name, String familyName, String email) {
        this.name = name;
        this.familyName = familyName;
        this.birthDate = LocalDate.now();
        this.email = email;
        this.legalResponsibleOne = "";
        this.legalResponsibleTwo = "";
    }

    public Student(String name, String familyName, LocalDate birthDate, String email) {
        this.name = name;
        this.familyName = familyName;
        this.birthDate = birthDate;
        this.email = email;
        this.legalResponsibleOne = "";
        this.legalResponsibleTwo = "";
    }

    public Student(String name, String familyName, LocalDate birthDate, String email, String legalResponsibleOne, String legalResponsibleTwo) {
        this.name = name;
        this.familyName = familyName;
        this.birthDate = birthDate;
        this.email = email;
        this.legalResponsibleOne = legalResponsibleOne;
        this.legalResponsibleTwo = legalResponsibleTwo;
    }

}
