package com.fr.schoolmanager.skills;

public class SkillNotFoundException extends RuntimeException {

    public SkillNotFoundException(Long id) {
        super("Could not find skill " + id);
    }

}
