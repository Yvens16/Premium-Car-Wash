import React from 'react'

require('./hero.scss');
function Hero({title, subtitle}) {
  return (
    // background-image url(); background-repeat:no-repeat;
    <div className='hero'>
      <div className="hero_text">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  )
}

export default Hero;
