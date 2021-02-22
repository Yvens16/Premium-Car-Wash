import React from 'react';
import star from '../../assets/images/testimonials/star.png';

require('./card.scss');
function Card({img, name, title, text}) {
  return (
    <div className='testimonial_card'>
      <img className='testimonial_card_profile' loading="lazy" src={img} alt=""/>
      <h3 className='name'>{name}</h3>
      <div className="testimonial_card_title">{title}</div>
      <div className="stars">
        <img src={star} loading="lazy" alt="étoile jaune"/>
        <img src={star} loading="lazy" alt="étoile jaune"/>
        <img src={star} loading="lazy" alt="étoile jaune"/>
        <img src={star} loading="lazy" alt="étoile jaune"/>
        <img src={star} loading="lazy" alt="étoile jaune"/>
      </div>
      <div className="testimonial_card_text">{text}</div>
    </div>
  )
}

export default Card;
