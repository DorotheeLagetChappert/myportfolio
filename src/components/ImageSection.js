import React from 'react';
import about from '../assets/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4><span> Dorothée Laget-Chappert</span></h4>
                <p className="about-titledev">Développeuse Full-Stack</p>
                <p className="about-text">
                Tout juste reconvertie, je suis à la recherche d'oportunités.
                En plus de coder, j'aime écrire durant mon temps libre. 
                La nature et la musique sont deux choses qui m'aident à me ressourcer et à réfléchir à de nouvelles idées créatives.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Age : 36 ans</p>
                        <p>Ma citation : <i>"L'humain doit être au coeur de toute collaboration."</i></p>
                    </div>
                </div>
                    {/* <button className="btn">Download CV</button>     */}
            </div>
        </div>
    )
}

export default ImageSection;
