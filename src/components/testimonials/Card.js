import React from 'react';
// import star from '../../assets/images/testimonials/star.png';
const star = 'https://ik.imagekit.io/cv7afda6wzi/particuliers/star_PDnCSU8iQ.png';
const starSmall = 'https://ik.imagekit.io/cv7afda6wzi/particuliers/star_PDnCSU8iQ.pngtr=w-40,h-40';
const starLarge = 'https://ik.imagekit.io/cv7afda6wzi/particuliers/star_PDnCSU8iQ.png?tr=w-40,h-40';

require('./card.scss');
function Card({img, imgSmall, imgLarge, name, title, text}) {
  return (
    <div className='testimonial_card'>
      <img className='testimonial_card_profile' loading="lazy" src={img} srcset={`${imgSmall} 300w, ${imgLarge} 900w`} alt="description"/>
      <h3 className='name'>{name}</h3>
      <div className="testimonial_card_title">{title}</div>
      <div className="stars">
        <img src={star} srcset={`${starSmall} 300w, ${starLarge} 900w`} loading="lazy" alt="étoile jaune"/>
        <img src={star} srcset={`${starSmall} 300w, ${starLarge} 900w`} loading="lazy" alt="étoile jaune"/>
        <img src={star} srcset={`${starSmall} 300w, ${starLarge} 900w`} loading="lazy" alt="étoile jaune"/>
        <img src={star} srcset={`${starSmall} 300w, ${starLarge} 900w`} loading="lazy" alt="étoile jaune"/>
        <img src={star} srcset={`${starSmall} 300w, ${starLarge} 900w`} loading="lazy" alt="étoile jaune"/>
      </div>
      <div className="testimonial_card_text">{text}</div>
    </div>
  )
}

export default Card;
