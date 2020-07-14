package com.fr.schoolmanager.students;

import com.fr.schoolmanager.skills.Skill;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/students")
    public List<Student> all() {
        return (List<Student>) studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    public Student one(@PathVariable Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException(id));
    }

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student newStudent) {
        return studentRepository.save(newStudent);
    }

    @PutMapping("/student/{id}")
    public Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setName(newStudent.getName());
                    student.setFamilyName(newStudent.getFamilyName());
                    student.setEmail(newStudent.getEmail());
                    student.setBirthDate(newStudent.getBirthDate());
                    student.setLegalResponsibleOne(newStudent.getLegalResponsibleOne());
                    student.setLegalResponsibleTwo(newStudent.getLegalResponsibleTwo());
                    return studentRepository.save(student);
                })
                .orElseGet(() -> {
                   newStudent.setId(id);
                   return studentRepository.save(newStudent);
                });
    }

    @DeleteMapping("/student/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentRepository.deleteById(id);
    }

    @GetMapping("/student/{studentId}/skills")
    public List<Skill> getStudentSkills(@PathVariable Long studentId) {
        return studentRepository.findById(studentId).orElseThrow(() -> new StudentNotFoundException(studentId)).getSkills();
    }

    

}
