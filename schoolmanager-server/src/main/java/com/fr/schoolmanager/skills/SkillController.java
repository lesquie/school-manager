package com.fr.schoolmanager.skills;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SkillController {

    private final SkillRepository skillRepository;

    public SkillController(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    @GetMapping("/skills")
    public List<Skill> all() {
        return (List<Skill>) skillRepository.findAll();
    }

    @GetMapping("/skill/{id}")
    public Skill one(@PathVariable Long id) {
        return skillRepository.findById(id).orElseThrow(() -> new SkillNotFoundException(id));
    }

    @PostMapping("/skill")
    public Skill addSkill(@RequestBody Skill newSkill) {
        return skillRepository.save(newSkill);
    }

    @PutMapping("/skill/{id}")
    public Skill updateSkill(@RequestBody Skill newSkill, @PathVariable Long id) {
        return skillRepository.findById(id)
                .map(skill -> {
                    skill.setName(newSkill.getName());
                    return skillRepository.save(skill);
                })
                .orElseGet(() -> {
                    newSkill.setId(id);
                    return skillRepository.save(newSkill);
                });
    }

    @DeleteMapping("/skill/{id}")
    public void deleteSkill(@PathVariable Long id) {
        skillRepository.deleteById(id);
    }

}
