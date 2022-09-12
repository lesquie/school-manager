package com.fr.schoolmanager;

import com.fr.schoolmanager.skills.Skill;
import com.fr.schoolmanager.students.Student;
import com.fr.schoolmanager.utilities.ExcelTools;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class SchoolmanagerApplicationTests {

	@Test
	void utilsExcelTest() {
		Student s1 = new Student("Bilbo", "Baggins",  LocalDate.of(2010, Month.JANUARY, 22),"bilbo@baggins.lotro");
		Student s2 = new Student("Sam", "Sam",  LocalDate.of(2010, Month.NOVEMBER, 28),"sam@sam.lotro");
		Student s3 = new Student("Frodo", "Baggins",  LocalDate.of(2010, Month.MARCH, 1),"frodo@baggins.lotro");

		List<Student> studentList = new ArrayList<>();
		studentList.add(s1);
		studentList.add(s2);
		studentList.add(s3);

		ExcelTools.convertToExcel(studentList);
		ExcelTools.convertToExcel(new ArrayList<Skill>());


	}
}
