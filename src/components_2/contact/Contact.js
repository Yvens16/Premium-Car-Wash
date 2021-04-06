import React, {useState} from 'react';
import {ReactComponent as AdressIcon} from '../../assets_2/svg/location_icon_svg.svg';
import {ReactComponent as PhoneIcon} from '../../assets_2/svg/phone_icon_svg.svg';
import {ReactComponent as MailIcon} from '../../assets_2/svg/email_icon_svg.svg';
const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE);

require('./contact.scss');
function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    console.log('Name', name);
    console.log('Phone', phone);
    console.log('Email', email);
    console.log('Message', message);
    base('Contact_Us').create([
      {
        "fields": {
          "Name": name,
          "Email": email,
          "Phone": phone,
          "Notes": message
        }
      },
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  }
  return (
    <section className='contact'>
      <div className="contact_contactUs">
        <h1 className="contact_contactUs-title">Contactez nous !</h1>
        <h3 className="contact_contactUs_subtitle">
          Contactez-nous pour un devis ou pour parler à l'équipe !
        </h3>
      </div>
      <div className="contact_info">
        <div className="contact_info_adress">
          <div className="info-logo"><AdressIcon/></div>
          <address>
            26 avenue des châtaigniers 95150 Taverny
          </address>
        </div>
        <div className="contact_info_phone">
          <div className="info-logo"><PhoneIcon/></div>
          <div className="contact_info_phone-numbers">
            <a href="tel:+33-6-27-26-94-73">06 27 26 94 73</a>
            <a href="tel:+33-6-29-31-68-28">06 29 31 68 28</a>
          </div>
        </div>
        <div className="contact_info_email">
          <div className="info-logo"><MailIcon/></div>
          <a href="mailto:">contact.premiumcarwash@gmail.com</a>
        </div>
      </div>
      <div className="contact_form">
        <h2 className="contact_form-title">Formulaire de contact</h2>
        <div className="contact_form-client">
          <div className="contact_form-client_info">
            <div className="name">
              <label htmlFor="name">Nom complet</label>
              <input
                onChange={e => setName(e.target.value)}
                type="name" id="name" name="name" placeholder='Patrcik Dubois'/>
            </div>
            <div className="mail">
              <label htmlFor="mail">Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                type="mail" id="mail" name="mail" placeholder='patrick@gmail.com'/>
            </div>
            <div className="phone">
              <label htmlFor="phone">Téléphone</label>
              <input
                onChange={e => setPhone(e.target.value)}
                type="phone" id="phone" name="phone" placeholder='06 56 54 45 54'/>
            </div>
          </div>
          <div className="contact_form-client-message">
            <label htmlFor="message">Message</label>
            <textarea
              onChange={e => setMessage(e.target.value)}
              name="message" id="message" cols="20" rows="10"></textarea>
          </div>
        </div>
        <button type="submit" onClick={submit}>Envoyer le message</button>
      </div>
    </section>
  )
}

export default Contact;
