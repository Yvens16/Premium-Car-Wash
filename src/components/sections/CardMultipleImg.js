import React from 'react';

require('./cardMultipleImg.scss');
function Card({
  imgLink, imgLinkSmall, imgLinkLarge,
  text,
  imgLink2, imgLink2Small, imgLink2Large,
  imgLink3, imgLink3Small, imgLink3Large,
}) {
  return (
      <div className='section_card_double'>
        {imgLink2 ?
        <div className='imgs'>
        <img src={imgLink} srcSet={`${imgLinkSmall} 300w, ${imgLinkLarge} 900w`} loading="lazy" alt="description" />
        <img src={imgLink2} srcSet={`${imgLink2Small} 300w, ${imgLink2Large} 900w`} loading="lazy" alt="description" />
        <img src={imgLink3} srcSet={`${imgLink3Small} 300w, ${imgLink3Large} 900w`} loading="lazy" alt="description" />
        </div> : <img src={imgLink} loading="lazy" alt="description" />}
        <div className="section_card_double_text">
          {text}
        </div>
      </div>
  )
}

export default Card;
