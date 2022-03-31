import React from 'react'
import Tittle from '../components/Tittle'
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import SoftSkillSection from '../components/SoftSkillSection';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'À propos de moi'} span={'À propos de moi'} />
            <ImageSection />
            <Tittle title={'Hards Skills'} span={'Hards Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'React Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Express Js'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'Git et GitHub'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Méthodes Agiles'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Planification SCRUM'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Web Design'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'SEO'} progress={'70%'} width={'50%'} />
                <SkillsSection skill={'Veille technologique'} progress={'80%'} width={'80%'} />
            </div>
            <Tittle title={'Softs Skills'} span={'Softs Skills'} />
            <div className="skillsContainer">
                <SoftSkillSection softskill={"Adaptabilité dans ce monde d'évolution."}/>
                <SoftSkillSection softskill={"La communication est la base de relations saines."}/>
                <SoftSkillSection softskill={"Le sens de l'organisation nécessaire au management."}/>
                <SoftSkillSection softskill={"L'empathie permet une ambiance de bienveillance."}/>
                <SoftSkillSection softskill={"La créativité et la curiosité nécessaires à mon bien-être."}/>
                <SoftSkillSection softskill={"Le sens du collectif pour aller plus loin ensemble et offrir un partage de connaissances."}/>
            </div>
            <Tittle title={'Contact'} span={'Contact'} />
            <div className="contact">
                <p className="contact-detail">Portable : 0682844760</p>
                <p className="contact-detail">Email : dorothee.lagetchappert@gmail.com</p>
                <p className="contact-detail">Adresse : 24750 Cornille</p>
            </div>
        </div>
    )
}

export default AboutPage;
