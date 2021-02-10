import React from 'react';
import Button from '../buttons/Button';
// import {ReactComponent as FamilyHome} from '../../assets/images/svgs/Family-amico.svg';

require('./hero.scss');
function Hero({title, subtitle}) {
  return (
    // background-image url(); background-repeat:no-repeat;
    <div className='hero'>
      <div className="hero_text">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <Button
        text='Nettoyer ma voiture'
        linkTo='/choisir_sa_ville'/>
    </div>
  )
}

export default Hero;
