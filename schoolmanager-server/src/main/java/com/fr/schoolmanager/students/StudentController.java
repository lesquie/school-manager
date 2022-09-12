package com.fr.schoolmanager.students;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class StudentController {

    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/students")
    public List<Student> all() {
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    public Student one(@PathVariable Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException(id));
    }

    @PostMapping("/student")
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

    @GetMapping("/student/export")
    public void export(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=students_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        //response.getOutputStream().write(ExcelTools.convertToExcel(studentRepository.findAll(), new Student()));
    }


}
