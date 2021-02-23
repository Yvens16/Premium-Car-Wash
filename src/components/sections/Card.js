import React from 'react';

require('./card.scss');
function Card({imgLink, text, imgLinkSmall, imgLinkLarge}) {
  return (
      <div className='section_card'>
        <img src={imgLink}
        srcset={`${imgLinkSmall} 300w, ${imgLinkLarge} 900w`} 
        loading="lazy" alt="description" />
        <div className="section_card_text">
          {text}
        </div>
      </div>
  )
}

export default Card;
