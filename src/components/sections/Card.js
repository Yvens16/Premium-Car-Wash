import React from 'react';

require('./card.scss');
function Card({imgLink, text, imgLink2}) {
  return (
      <div className='section_card'>
        {imgLink2 ?
        <div className='imgs'>
        <img src={imgLink} loading="lazy" alt="description" />
        <img src={imgLink2} loading="lazy" alt="description" />
        </div> : <img src={imgLink} loading="lazy" alt="description" />}
        <div className="section_card_text">
          {text}
        </div>
      </div>
  )
}

export default Card;
