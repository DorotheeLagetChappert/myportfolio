import React from "react";
import about from "../assets/about.jpg";

function ImageSection() {
 return (
  <div className="ImageSection">
   <div className="img">
    <img src={about} alt="" />
   </div>
   <div className="about-info">
    <h4>
     <span> Dorothée Laget-Chappert</span>
    </h4>
    <p className="about-titledev">Développeuse Full-Stack</p>
    <p className="about-text">
     Reconvertie en 2021 dans le domaine du développement web et mobile, j'ai
     décidé de devenir freelance. Mais ayant toujours été attirée par la partie
     visuelle, je viens de me lancer dans une formation d'infographiste.
    </p>
    <p className="about-text">
     En plus de coder, j'aime écrire durant mon temps libre. La nature et la
     musique sont deux choses qui m'aident à me ressourcer et à réfléchir à de
     nouvelles idées créatives.
    </p>
    <div className="about-details">
     <div className="left-section">
      <p>Âge : 36 ans</p>
      <p>
       Ma citation :{" "}
       <i>"L'humain doit être au coeur de toute collaboration."</i>
      </p>
     </div>
    </div>
    {/* <button className="btn">Download CV</button>     */}
   </div>
  </div>
 );
}

export default ImageSection;
