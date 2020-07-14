package com.fr.schoolmanager;

import com.fr.schoolmanager.skills.Skill;
import com.fr.schoolmanager.skills.SkillRepository;
import com.fr.schoolmanager.skills.SkillStatus;
import com.fr.schoolmanager.students.Student;
import com.fr.schoolmanager.students.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.Date;

@Configuration
@Slf4j
public class LoadDatabase {

    private static final Logger logger = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(StudentRepository studentRepository, SkillRepository skillRepository) {
        return args -> {

            Student s1 = new Student("Bilbo", "Baggins",  LocalDate.of(2010, Month.JANUARY, 22),"bilbo@baggins.lotro");
            Student s2 = new Student("Sam", "Sam",  LocalDate.of(2010, Month.NOVEMBER, 28),"sam@sam.lotro");
            Student s3 = new Student("Frodo", "Baggins",  LocalDate.of(2010, Month.MARCH, 1),"frodo@baggins.lotro");

            Skill sk1 = new Skill("Skill 1", SkillStatus.NOT_ACQUIRED);
            Skill sk2 = new Skill("Skill 2", SkillStatus.ACQUIRED);
            Skill sk3 = new Skill("Skill 3", SkillStatus.IN_PROGRESS);
            Skill sk4 = new Skill("Skill 4", SkillStatus.MASTERED);
            Skill sk5 = new Skill("Skill 5", SkillStatus.NOT_ACQUIRED);

            skillRepository.saveAll(Arrays.asList(sk1, sk2, sk3, sk4, sk5));

            s1.getSkills().addAll(Arrays.asList(sk1, sk2, sk3, sk4, sk5));
            s2.getSkills().addAll(Arrays.asList(sk1, sk2, sk3, sk4, sk5));
            s3.getSkills().addAll(Arrays.asList(sk1, sk2, sk3, sk4, sk5));

            logger.info("Preloading :" + studentRepository.save(s1));
            logger.info("Preloading :" + studentRepository.save(s2));
            logger.info("Preloading :" + studentRepository.save(s3));

        };
    }

}
