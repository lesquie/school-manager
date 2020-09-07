package com.fr.schoolmanager.evaluation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {

    @Query(value = "SELECT * FROM Evaluation WHERE student_id = ?1", nativeQuery = true)
    List<Evaluation> findAllByStudentId(Long id);

    @Query(value = "SELECT * FROM Evaluation WHERE skill_id = ?1", nativeQuery = true)
    List<Evaluation> findAllBySkillId(Long id);

}
