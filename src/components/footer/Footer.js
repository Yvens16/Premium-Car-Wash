import React from 'react';
import {ReactComponent as Instagram} from '../../assets/images/instagram.svg';
import {ReactComponent as Linkedin} from '../../assets/images/linkedin.svg';
import {ReactComponent as Facebook} from '../../assets/images/facebook.svg';

require('./footer.scss');
function Footer() {
  return (
    <footer className='footer'>
      <div className="contact">
        <p>
          contact 1:
          <a href="tel:+33627269473">06 27 26 94 73</a>
        </p>
        <p>
          contact 2:
          <a href="tel:+33629316828">06 29 31 68 28</a>
        </p>
      </div>
      <div className="footer_social">
        <a href="https://www.instagram.com/premiumcarwash_fr/">
          <Instagram/>
        </a>
        <a href="https://www.facebook.com/premiumcarwashfr">
          <Facebook/>
        </a>
        <a href="http://">
          <Linkedin/>
        </a>
      </div>
      <p className='footer_copywright'>Copyright © 2020 Premium Car wash</p>
    </footer>
  )
}

export default Footer;
