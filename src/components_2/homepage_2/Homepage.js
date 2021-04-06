import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import detailing from '../../assets_2/photos/car_detailing.jpeg';
import glass from '../../assets_2/photos/vitre_teinté.jpeg';
import polishing from '../../assets_2/photos/polishing.jpeg';
import waterless from '../../assets_2/photos/interior.jpeg';
import covering from '../../assets_2/photos/covering_custom_medium.jpeg';
import lights from '../../assets_2/photos/renovation_phares.jpeg';
import dent from '../../assets_2/photos/lambo.jpeg';

require('./homepage.scss');

const cards = [
  {title: 'Nettoyage intérieur/extérieur', image: detailing,
  description:'Nettoyage à la main de votre véhicule de fond en comble', link:'nettoyage-intérieur-extérieur'},
  {title: 'Vitres teintées', image: glass,
  description:'Pose de vitres teintées en 2h', link:'vitres-teintées'},
  {title: 'Polissage/Lustrage', image:polishing,
  description:'Suppression des rayures sur la carrosserie', link:'polissage-rayure-carrosserie'},
  {title: 'Débosselage sans peinture', image: dent,
  description:'Suppression de bosse sur la carrosserie', link:'débosselage-sans-peinture'},
  {title: 'Lavage sans eau à domicile', image: waterless,
  description:'Nettoyage sans eau de votre véhicule à domicile ou au bureau', link:'lavage-sans-eau'},
  {title: 'Covering/wrapping', image: covering,
  description:"Envie d'un nouveau look ou besoin de publicité sur votre véhicule?", link:'covering-wrapping'},
  {title: 'Rénovation de phares', image: lights,
  description:'Redonnons de la clarté à vos phares pour votre sécurité et pour le contrôle technique', link:'rénovation-phares'}
];
function Hero() {
  return (
    <section className='home_hero'>
      <div className='content'>
        <h1 className='title title_1'>Nettoyage de voiture à la main</h1>
        <h1 className='title title_2'>En Île de France</h1>
        <h1 className='title title_3'>Débosselage sans peinture</h1>
        <h1 className='title title_4'>Rénovation de phares</h1>
        <h1 className='title title_5'>Covering / Wrapping</h1>
        <h1 className='title title_6'>Vitres teintées</h1>
        <h1 className='title title_7'>Lavage sans eau à domicile</h1>
      </div>
      <button className='home_hero_devis'>
          <NavLink to='/'>Devis Nettoyage</NavLink>
      </button>
    </section>
  )
}
function Homepage() {
  return (
    <main className='home'>
      <Hero/>
      <section className='services_list'>
        {
          cards.map((item, idx) => (
            <Card key={idx} picture={item.image} title={item.title} description={item.description} url={item.link}/>
          ))
        }
      </section>
    </main>
  )
}

export default Homepage;
