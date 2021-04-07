import React, { useEffect } from 'react'
import { run } from "tripetto-runner-chat";
import Services from "tripetto-services";

const { definition, styles, l10n, locale, translations, attachments, onSubmit } = Services.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNGxPWVhwLzZydUcycnZzTjJPbkxzNk5KWlBCWVRzRUVQQjYxOW03ZHIvQT0iLCJkZWZpbml0aW9uIjoiUWxaWVZyTGMwY2tpUlNZTnFiNGdXL21tSElIWWdJbGJDUVlEbXl5ak5iTT0iLCJ0eXBlIjoiY29sbGVjdCJ9.os7274L_WpKoJj2o6jNgfVUSbFN-WtBmS3FOzR_TfzI" });

function Devis() {
  useEffect(() => run({
    element: document.getElementById('tripetto'), /* Or supply your own element here */
    definition,
    styles,
    l10n,
    locale,
    translations,
    attachments,
    onSubmit
}), []);
  return (
    <div className='devis-container'>
      <div id="tripetto"></div>
    </div>
  )
}

export default Devis;
