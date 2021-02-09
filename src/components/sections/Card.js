import React from 'react';

require('./card.scss');
function Card({imgLink, text}) {
  return (
    <div className='section_card'>
      <img src={imgLink} alt="description" />
      <div className="section_card_text">
        {text}
      </div>
    </div>
  )
}

export default Card;
