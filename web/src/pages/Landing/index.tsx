import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Images
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

// Icons
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua Plataforma de Estudos Online</h2>
        </div>

        <img src={landingImg} alt="Plataforma de Estudos" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar"/>
            Dar Aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;