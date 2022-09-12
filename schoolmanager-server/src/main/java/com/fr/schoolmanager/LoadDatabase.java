package com.fr.schoolmanager;

import com.fr.schoolmanager.evaluation.Evaluation;
import com.fr.schoolmanager.evaluation.EvaluationRepository;
import com.fr.schoolmanager.evaluation.EvaluationStatus;
import com.fr.schoolmanager.skills.Skill;
import com.fr.schoolmanager.skills.SkillRepository;
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

@Configuration
@Slf4j
public class LoadDatabase {

    private static final Logger logger = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(StudentRepository studentRepository, SkillRepository skillRepository, EvaluationRepository evaluationRepository) {
        return args -> {

            Student s1 = new Student("Bilbo", "Baggins",  LocalDate.of(2010, Month.JANUARY, 22),"bilbo@baggins.lotro");
            Student s2 = new Student("Sam", "Sam",  LocalDate.of(2010, Month.NOVEMBER, 28),"sam@sam.lotro");
            Student s3 = new Student("Frodo", "Baggins",  LocalDate.of(2010, Month.MARCH, 1),"frodo@baggins.lotro");

            Skill sk1 = new Skill("Skill 1");
            Skill sk2 = new Skill("Skill 2");
            Skill sk3 = new Skill("Skill 3");
            Skill sk4 = new Skill("Skill 4");
            Skill sk5 = new Skill("Skill 5");

            skillRepository.saveAll(Arrays.asList(sk1, sk2, sk3, sk4, sk5));

            logger.info("Preloading :" + studentRepository.save(s1));
            logger.info("Preloading :" + studentRepository.save(s2));
            logger.info("Preloading :" + studentRepository.save(s3));

            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s1.getId(), sk1.getId(), EvaluationStatus.ACQUIRED, LocalDate.of(2020, Month.MARCH, 22))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s2.getId(), sk1.getId(), EvaluationStatus.NOT_ACQUIRED, LocalDate.of(2020, Month.MARCH, 22))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s3.getId(), sk1.getId(), EvaluationStatus.IN_PROGRESS, LocalDate.of(2020, Month.MARCH, 22))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s1.getId(), sk2.getId(), EvaluationStatus.NOT_ACQUIRED, LocalDate.of(2020, Month.MARCH, 25))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s2.getId(), sk2.getId(), EvaluationStatus.IN_PROGRESS, LocalDate.of(2020, Month.MARCH, 25))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s3.getId(), sk2.getId(), EvaluationStatus.ACQUIRED, LocalDate.of(2020, Month.MARCH, 25))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s1.getId(), sk3.getId(), EvaluationStatus.IN_PROGRESS, LocalDate.of(2020, Month.APRIL, 10))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s2.getId(), sk3.getId(), EvaluationStatus.ACQUIRED, LocalDate.of(2020, Month.APRIL, 10))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s3.getId(), sk3.getId(), EvaluationStatus.NOT_ACQUIRED, LocalDate.of(2020, Month.APRIL, 10))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s1.getId(), sk4.getId(), EvaluationStatus.ACQUIRED, LocalDate.of(2020, Month.MAY, 2))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s2.getId(), sk4.getId(), EvaluationStatus.ACQUIRED, LocalDate.of(2020, Month.MAY, 2))));
            logger.info("Evaluating : " + evaluationRepository.save(new Evaluation(s3.getId(), sk4.getId(), EvaluationStatus.ACQUIRED, LocalDate.of(2020, Month.MAY, 2))));
            
        };
    }

}
