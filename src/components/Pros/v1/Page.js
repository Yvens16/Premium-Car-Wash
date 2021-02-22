import React from 'react';
import Hero from '../../hero/Hero';
import Subtitle from '../../sections/Subtitle';
import Card from '../../sections/Card';
import CardMultipleImg from '../../sections/CardMultipleImg';
import renaultParking from '../../../assets/images/pro/renault_parking.jpeg';
import renaultCaptur from '../../../assets/images/pro/renault_captur_parking.jpeg';
import mercoExter from '../../../assets/images/pro/merco_exter.jpeg';
import mercoInter from '../../../assets/images/pro/merco_inter.jpeg';
import mercoInterBehind from '../../../assets/images/pro/merco_inter_derriere.jpeg';
import calendly from '../../../assets/images/pro/Calendly.png';
import Button from '../../buttons/Button';
require('./page.scss');

function Pro() {
  return (
    <main className='pro_page'>
      <Hero
        external={true}
        pro={true}
        title='Gérez votre budget de la meilleure des façons'
        subtitle='Une équipe de pros à votre disposition seulement quand vous en avez besoin. Que vous ayez une concession ou un garage.'/>
      <Subtitle
        title="Votre travail, c'est la vente"/>
      <Card
        text="Sans déplacer vos véhicules, faites les nettoyer par des pro. Cela vous permettra d'économiser le précieux temps d'un ou plusieurs de vos employés. Ni d'engager un employé spécifiquement pour ça."
        imgLink={renaultParking}/>
      <Subtitle
        title="Pas de délai dans la vente de vos véhicules"/>
      <Card
        text="Il n'y a plus besoin de déposer vos véhicules au garage puis d'attendre un ou deux jours pour les récupérer. Vos véhicules seront disponibles de suite. Qui sait ? vous auriez pu manquer une vente."
        imgLink={renaultCaptur}/>
      <Subtitle
        title="Une parole, le soin du détail"/>
      <CardMultipleImg
        text={<span>Nous sommes sérieux dans notre prestation, c'est notre fierté de rendre un véhicule totalement propre qui répond à vos attentes. D'ou notre garantie premium, si le véhicule rendu ne correspond pas à vos attentes.
          <br/> <span className='guarantee'>Vous ne sortirez pas un centime de votre poche!</span>
        </span>}
        imgLink2={mercoInter}
        imgLink={mercoExter}
        imgLink3={mercoInterBehind}/>
      <Subtitle
        title="Réservez automatiquement votre prestation"/>
      <Card
        text="Vous aurez accès à notre calendrier en ligne et en temps réelle afin de pouvoir réserver vos prestation. Cela vous permettra ainsi d'avoir une organisation optimale."
        imgLink={calendly}/>
      <Button
        text='Prendre un rdv téléphonique'
        linkTo='https://calendly.com/yvensbelaston/rendez-vous-lavage-auto?month=2021-03'
        external={true}
      />
    </main>
  )
}

export default Pro;
