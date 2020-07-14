package com.fr.schoolmanager.students;

import com.fr.schoolmanager.skills.Skill;
import com.fr.schoolmanager.skills.SkillStatus;
import lombok.Data;
import net.bytebuddy.description.NamedElement;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@Data
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

    @ManyToMany
    @JoinTable(
            name="STUDENT_SKILLS",
            joinColumns = @JoinColumn(name = "STUDENTS_ID"),
            inverseJoinColumns = @JoinColumn(name = "SKILLS_ID"))
    private List<Skill> skills;

    public Student() {
    }

    public Student(String name, String familyName, String email) {
        this.name = name;
        this.familyName = familyName;
        this.birthDate = LocalDate.now();
        this.email = email;
        this.legalResponsibleOne = "";
        this.legalResponsibleTwo = "";
        this.skills = new ArrayList<>();
    }

    public Student(String name, String familyName, LocalDate birthDate, String email) {
        this.name = name;
        this.familyName = familyName;
        this.birthDate = birthDate;
        this.email = email;
        this.legalResponsibleOne = "";
        this.legalResponsibleTwo = "";
        this.skills = new ArrayList<>();
    }

    public Student(String name, String familyName, LocalDate birthDate, String email, String legalResponsibleOne, String legalResponsibleTwo) {
        this.name = name;
        this.familyName = familyName;
        this.birthDate = birthDate;
        this.email = email;
        this.legalResponsibleOne = legalResponsibleOne;
        this.legalResponsibleTwo = legalResponsibleTwo;
        this.skills = new ArrayList<>();
    }

    public Student(String name, String familyName, LocalDate birthDate, String email, String legalResponsibleOne, String legalResponsibleTwo, List<Skill> skills) {
        this.name = name;
        this.familyName = familyName;
        this.birthDate = birthDate;
        this.email = email;
        this.legalResponsibleOne = legalResponsibleOne;
        this.legalResponsibleTwo = legalResponsibleTwo;
        this.skills = skills;
    }

}
