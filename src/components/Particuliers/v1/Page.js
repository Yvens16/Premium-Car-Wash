import React from 'react';
import Hero from '../../hero/Hero';
import Button from '../../buttons/Button';
import Subtitle from '../../sections/Subtitle';
import Card from '../../sections/Card';
import TestimonialCard from '../../testimonials/Card';
import Pricing from '../../pricing/Pricing';
import diagnosticImage from '../../../assets/images/diagnostic.png';
import oldmanDetailingImage from '../../../assets/images/old_man_detailing.png';
import parkingImage from '../../../assets/images/parking_lot.jpg';
import Abou from '../../../assets/images/testimonials/aboud_drame.jpeg';
import Tonio from '../../../assets/images/testimonials/Antonio.jpg'
import Petronille from '../../../assets/images/testimonials/Pétronille.JPG';


require('./page.scss');
function Page() {
  return (
    <main className='particuliers'>
    <Hero
      title='Gagnez du temps, restez chez vous'
      subtitle='Un habitacle propre de qualité professionnel parce que nous avons l’expérience et les outils pour.'/>
      <Subtitle
        title='Et pourquoi pas éviter un mal de dos en quelques clics ?'/>
      <Card
        text='Même les plus petit recoin de l’habitacle 
        seront nettoyés. Fini les moments ou vous deviez vous courber pendant 1h pour atteindre les plus petit recoins de l’habitacle.'
        imgLink={oldmanDetailingImage}/>
      <Subtitle
        title="Marre d'attendre 1h au garage"/>
      <Card
        text='En se déplaçant au garage c’est environ 15 min pour y aller 15min pour y revenir et 1h d’attente sur place. Franchement moi aussi j’aimerai éviter de perdre 1h30 si je pouvais. Autant la faire nettoyer quand je suis au boulot.'
        imgLink={parkingImage}/>
      <Button
        text='Nettoyer ma voiture'
        linkTo='/choisir_sa_ville'
      />
      {/* <Subtitle
        title="Mieux vaut prévenir que guérir"/>
      <Card
        text='En utilisant la valise diagnostic vous pourrez suivre l’évolution des composantes de votre voitures avant même qu’un voyant s’allume sur le tableau de bord. De quoi anticiper des problèmes mineurs qui pourrait lourdement s’aggraver et vous coûter une somme très conséquente chez votre garagiste.'
        imgLink={diagnosticImage}/> */}
      <Subtitle
        title="Fait pour les gens pointilleux avec leur voiture"/>
      <div className="particuliers_horizontal_scroll">
        <TestimonialCard
          img={Abou}
          name='Abou Drame'
          title='Chef de projet digital chez Disney'
          text='Pour moi qui passe beaucoup de temps dans ma voiture pour me rendre au boulot. Ça me tapait un peu sur les nerfs de voir les miettes entre les sièges qui m’était inatteignable. C’est sûr que je pouvais pas rivaliser sans les outils qu’ils possèdent. Au moins je ne me prend plus la tête à y penser.'
        />
        <TestimonialCard
          img={Petronille}
          name='Pétronille Godin'
          title="Directrice d'école primaire" 
          text='Après une journée de cours ou au bureau, j’ai plus vraiment la force de nettoyer les cochonnerie de mes 2 petites filles. Grâce à ce service, j’ai transformer une corvée en un moment de détente.'
        />
        <TestimonialCard
          img={Tonio}
          name='Antonio De Oliveira'
          title="Chef de projet chez Tessi" 
          text='Entre la voiture de fonction et la voiture familiale, ça m’ennuyais de faire des aller retour à la station essence pour les nettoyer. La, ils me le font des fois au bureaux des fois à la maison et c’est bien mieux que mon nettoyage fait maison.'
        />
      </div>
      <Button
        text='Nettoyer ma voiture'
        linkTo='/choisir_sa_ville'
      />
      <Pricing/>
    </main>
  )
}

export default Page;
