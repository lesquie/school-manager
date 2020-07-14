package com.fr.schoolmanager.skills;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fr.schoolmanager.students.Student;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "SKILLS")
public class Skill {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private SkillStatus status;

    @ManyToMany(mappedBy = "skills")
    @JsonIgnore
    private List<Student> students;

    public Skill() {
    }

    public Skill(String name, SkillStatus status) {
        this.name = name;
        this.status = status;
        this.students = new ArrayList<>();
    }
}
