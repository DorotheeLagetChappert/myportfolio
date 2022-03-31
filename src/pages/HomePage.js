import React from 'react';

import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {

    return ( 
        <div className="HomePage" >
            <header className="hero">
                <h1 className="hero-text">
                    Bienvenue, je suis
                    <span> Dorothée</span>
                </h1>
                <p className="h-sub-text">
                    Ici, je vais te faire découvrir mon univers de développeuse.
                </p>
                <div className="icons">
                    <a href='https://www.linkedin.com/in/dorotheelagetchappert' rel='noopener noreferrer' target='_blank' className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lk"/>
                    </a>
                    <a href='https://www.github.com/DorotheeLagetChappert' rel='noopener noreferrer' target='_blank' className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
