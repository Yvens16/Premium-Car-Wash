import React from 'react';
import { Link } from "react-router-dom";

require('./button.scss');
function Button({ text,linkTo, external }) {
  if (external) {
    return (
      <a href={linkTo}>
        <button className='button'>
          {text}
        </button>
      </a>
    ) 
  }
  return (
    <Link to={linkTo}>
      <button className='button'>
        {text}
      </button>
    </Link>
  )
}

export default Button;
