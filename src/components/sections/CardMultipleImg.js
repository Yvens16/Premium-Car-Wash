import React from 'react';

require('./cardMultipleImg.scss');
function Card({imgLink, text, imgLink2, imgLink3}) {
  return (
      <div className='section_card_double'>
        {imgLink2 ?
        <div className='imgs'>
        <img src={imgLink} loading="lazy" alt="description" />
        <img src={imgLink2} loading="lazy" alt="description" />
        <img src={imgLink3} loading="lazy" alt="description" />
        </div> : <img src={imgLink} loading="lazy" alt="description" />}
        <div className="section_card_double_text">
          {text}
        </div>
      </div>
  )
}

export default Card;
