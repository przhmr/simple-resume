import React from 'react';
import HeartIcon from '../assets/heart.svg';
import SocialIcon from './social_icon';

const Footer = ({ social }) => (
  <footer className="py-6 mx-auto items-center justify-between md:flex">
    <div className="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-2">
      <span className="inline-block mr-1">
        © {new Date().getFullYear()} | Theme
      </span>
      <span className="inline-block mr-1">
        <HeartIcon
          className="h-3 w-3 fill-current"
          style={{ color: '#de3618' }}
        />
      </span>
      <span className="inline-block mr-1">by</span>
      <a
        className="text-primary-500 hover:text-primary-700 font-bold"
        href="https://barancezayirli.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Homer Perozo
      </a>

      <a href="https://integrately.com?ref=m5v2l2&utm_campaign=Website Referral" target="_blank"><img src="https://integrately-images.s3-us-west-2.amazonaws.com/we-automate-with-integrately-dark.svg" width="120" alt="Integrately - Integration platform" title="Click to learn more"/></a>
    </div>
    {social && (
      <div className="flex items-center justify-center ml-2">
        {social.map(item => (
          <a
            key={item.service}
            className="footer-social-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.service}
          >
            <SocialIcon type={item.service} />
          </a>
        ))}
      </div>
    )}
  </footer>
);

export default Footer;
