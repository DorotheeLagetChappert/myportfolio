import React from 'react'

function SoftSkillSection({softskill}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{softskill}</h5>
            </div>
        </div>
    )
}

export default SoftSkillSection;