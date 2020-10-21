import React from 'react';
import MailIcon from '../assets/mail.svg';
import MobileIcon from '../assets/mobile.svg';

import LocationIcon from '../assets/location.svg';
import DownloadIcon from '../assets/download.svg';

const Contact = ({ field, value }) => (
  
  <span className="flex my-2 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <MailIcon className="contact-icon" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <MobileIcon className="contact-icon" />
        <a className="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )}
    
    {field === 'location' && (
      <>
        <LocationIcon className="contact-icon" />
        <span className="contact-link">{value}</span>
      </>
    )}


{field === 'MyCV' && (
      <>
        <DownloadIcon className="contact-icon" />
        <a
          className="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="MyCV"
        >
          Download CV
        </a>
      </>
    )}


    
  </span>
  

  
);

export default Contact;
