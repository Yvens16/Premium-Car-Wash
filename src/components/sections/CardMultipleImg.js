import React from 'react';

require('./cardMultipleImg.scss');
function Card({imgLink, text, imgLink2, imgLink3}) {
  return (
      <div className='section_card_double'>
        {imgLink2 ?
        <div className='imgs'>
        <img src={imgLink} alt="description" />
        <img src={imgLink2} alt="description" />
        <img src={imgLink3} alt="description" />
        </div> : <img src={imgLink} alt="description" />}
        <div className="section_card_double_text">
          {text}
        </div>
      </div>
  )
}

export default Card;
