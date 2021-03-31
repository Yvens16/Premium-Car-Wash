import React from 'react';
import { NavLink } from 'react-router-dom';

require('./homepage.scss');
function Hero() {
  return (
    <section className='home_hero'>
      <div className='content'>
        <h1 className='title title_1'>Nettoyage de voiture à la main</h1>
        <h1 className='title title_2'>En Île de France</h1>
        <h1 className='title title_3'>Débosselage sans peiture</h1>
        <h1 className='title title_4'>Rénovation de phares</h1>
        <h1 className='title title_5'>Covering / Wrapping</h1>
        <h1 className='title title_6'>Vitres teintées</h1>
        <h1 className='title title_7'>Lavage sans eau à domicile</h1>
      </div>
      <button>
          <NavLink to='/'>Devis Nettoyage</NavLink>
      </button>
    </section>
  )
}
function Homepage() {
  return (
    <main className='home'>
      <Hero/>
    </main>
  )
}

export default Homepage;
