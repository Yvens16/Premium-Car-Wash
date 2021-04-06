import React from 'react';
import {NavLink} from 'react-router-dom';

require('./card.scss');
function Card({picture, title, description, url}) {
  return (
    <NavLink className='service_card' to={url}>
      <div className="service_card_content">
        <h3 className='service_card_content_title'>{title}</h3>
        <p className="service_card_content_description">{description}</p>
      </div>
      <img src={picture} alt='service' className="service_card_image"></img>
    </NavLink>
  )
}

export default Card;
