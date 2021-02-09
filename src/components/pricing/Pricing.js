import React from 'react';
import Button from '../buttons/Button';

require('./pricing.scss');
function Pricing() {
  return (
    <div className='pricing_section'>
      <h4>Traitement complet de l'habitacle</h4>
      <h4 className='pricing_section_bonus'>+2 bonus gratuit</h4>
      <div className="pricing_section_price">
        <h3 className="pricing_section_green">À partir de:</h3>
        <h3 className="pricing_section_red">80,99€</h3>
        <h3 className="pricing_section_green">65€</h3>
      </div>
      <div className="pricing_section_part">
        <h6>Nettoyage complet en profondeur</h6>
        <p className="pricing_section_red">À partir de 49€</p>
      </div>
      <div className="pricing_section_part">
        <h6>Vérification des niveaux de liquides</h6>
        <p className="pricing_section_red">19,99€</p>
      </div>
      <div className="pricing_section_part">
        <h6>Vérification et gonflage des pneus</h6>
        <p className="pricing_section_red">11,99€</p>
      </div>
      <Button
        text='Nettoyer ma voiture'
        linkTo='/'
      />
    </div>
  )
}

export default Pricing;
