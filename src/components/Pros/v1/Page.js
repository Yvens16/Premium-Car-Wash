import React from 'react';
import Hero from '../../hero/Hero';
import Subtitle from '../../sections/Subtitle';
import Card from '../../sections/Card';
import CardMultipleImg from '../../sections/CardMultipleImg';
// import renaultParking from '../../../assets/images/pro/renault_parking.jpeg';
// import const renaultCaptur from '../../../assets/images/pro/renault_captur_parking.jpeg';
// import const mercoExter from '../../../assets/images/pro/merco_exter.jpeg';
// import const mercoInter from '../../../assets/images/pro/merco_inter.jpeg';
// import const mercoInterBehind from '../../../assets/images/pro/merco_inter_derriere.jpeg';
// import calendly from '../../../assets/images/pro/Calendly.png';
import Button from '../../buttons/Button';
const renaultParking = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8331_1d2m0rVJhJ.jpeg?tr=bl-6';
const renaultParkingSmall = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8331_1d2m0rVJhJ.jpeg?tr=w-338,h-253';
const renaultParkingLarge = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8331_1d2m0rVJhJ.jpeg?tr=w-412,h-200';

const renaultCaptur = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8330_nOpV3EKn6Kgi.jpeg?tr=bl-6';
const renaultCapturSmall = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8330_nOpV3EKn6Kgi.jpeg?tr=w-338,h-253';
const renaultCapturLarge = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8330_nOpV3EKn6Kgi.jpeg?tr=w-412,h-200';

const mercoExter = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8377_vt4hJNJVd5wO.jpeg?tr=bl-6';
const mercoExterSmall = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8377_vt4hJNJVd5wO.jpeg?tr=w-112,h-150';
const mercoExterLarge = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8377_vt4hJNJVd5wO.jpeg?tr=w-275,h-366';

const mercoInter = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8383_bZcgeasjQ.jpeg?tr=bl-6';
const mercoInterSmall = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8383_bZcgeasjQ.jpeg?tr=w-113,h-150';
const mercoInterLarge = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8383_bZcgeasjQ.jpeg?tr=w-274,h-366,h200';

const mercoInterBehind = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8380_EBgELQCQM.jpeg?tr=bl-6';
const mercoInterBehindSmall = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8380_EBgELQCQM.jpeg?tr=w-112,h-150';
const mercoInterBehindLarge = 'https://ik.imagekit.io/cv7afda6wzi/pro/IMG_8380_EBgELQCQM.jpeg?tr=w-275,h-366';

const calendly = 'https://ik.imagekit.io/cv7afda6wzi/pro/Calendly_wgNvUZVt5qatO.png?tr=bl-6';
const calendlySmall = 'https://ik.imagekit.io/cv7afda6wzi/pro/Calendly_wgNvUZVt5qatO.png?tr=w-112,h-150';
const calendlyLarge = 'https://ik.imagekit.io/cv7afda6wzi/pro/Calendly_wgNvUZVt5qatO.png?tr=w-324,h-275,';

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
        imgLink={renaultParking}
        imgLinkSmall={renaultParkingSmall}
        imgLinkLarge={renaultParkingLarge}
        />
      <Subtitle
        title="Pas de délai dans la vente de vos véhicules"/>
      <Card
        text="Il n'y a plus besoin de déposer vos véhicules au garage puis d'attendre un ou deux jours pour les récupérer. Vos véhicules seront disponibles de suite. Qui sait ? vous auriez pu manquer une vente."
        imgLink={renaultCaptur}
        imgLinkSmall={renaultCapturSmall}
        imgLinkLarge={renaultCapturLarge}
        />
      <Subtitle
        title="Une parole, le soin du détail"/>
      <CardMultipleImg
        text={<span>Nous sommes sérieux dans notre prestation, c'est notre fierté de rendre un véhicule totalement propre qui répond à vos attentes. D'ou notre garantie premium, si le véhicule rendu ne correspond pas à vos attentes.
          <br/> <span className='guarantee'>Vous ne sortirez pas un centime de votre poche!</span>
        </span>}
        imgLink2={mercoInter}
        imgLink2Small={mercoInterSmall}
        imgLink2Large={mercoInterLarge}
        imgLink={mercoExter}
        imgLinkSmall={mercoExterSmall}
        imgLinkLarge={mercoExterLarge}
        imgLink3={mercoInterBehind}
        imgLink3Small={mercoInterBehindSmall}
        imgLink3Large={mercoInterBehindLarge}
        />
      <Subtitle
        title="Réservez automatiquement votre prestation"/>
      <Card
        text="Vous aurez accès à notre calendrier en ligne et en temps réelle afin de pouvoir réserver vos prestation. Cela vous permettra ainsi d'avoir une organisation optimale."
        imgLink={calendly}
        imgLinkSmall={calendlySmall}
        imgLinkLarge={calendlyLarge}
        />
      <Button
        text='Prendre un rdv téléphonique'
        linkTo='https://calendly.com/yvensbelaston/rendez-vous-lavage-auto?month=2021-03'
        external={true}
      />
    </main>
  )
}

export default Pro;
