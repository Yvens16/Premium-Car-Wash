import React from 'react'

require('./subtitle.scss');
function subtitle({title}) {
  return (
    <div className='subtitle'>
      <h3>{title}</h3> 
    </div>
  )
}

export default subtitle;
