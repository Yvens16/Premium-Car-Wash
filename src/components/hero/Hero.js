import React from 'react';
import Button from '../buttons/Button';

require('./hero.scss');
function Hero({title, subtitle, pro, external}) {
  return (
    <div className='hero'>
      <div className="hero_text">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <Button
        external={external}
        text={pro ? 'Prendre un rdv téléphonique' : 'Nettoyer ma voiture'}
        linkTo={pro ? 'https://calendly.com/yvensbelaston/rendez-vous-lavage-auto?month=2021-03': '/choisir_sa_ville'}/>
    </div>
  )
}

export default Hero;
